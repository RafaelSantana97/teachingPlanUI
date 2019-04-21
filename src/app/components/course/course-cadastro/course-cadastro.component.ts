import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { routerTransition } from 'src/app/router.animations';

import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { SubjectDTOarray } from '../../subject/subject.model';
import { SubjectService } from '../../subject/subject.service';
import { UserDTO } from '../../user/user.model';
import { UserSearchService } from '../../user/user-search/user-search.service';

@Component({
  selector: 'app-subject',
  templateUrl: './course-cadastro.component.html',
  styleUrls: ['./course-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class CourseCadastroComponent extends BaseCadastro<Course> implements OnInit {

  subjects: FormArray = new FormArray([]);
  coordinators: FormArray = new FormArray([]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private subjectService: SubjectService,
    private userSearchService: UserSearchService
  ) { super() }

  ngOnInit() {
    this.spinner.show();

    this.formulario = Course.createFormGroup(this.formBuilder);
    this.coordinators = this.formulario.get('coordinators') as FormArray;
    this.subjects = this.formulario.get('subjects') as FormArray;

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '-1') {
        this.titulo = "New";
        this.showSubjects();

      } else {
        this.titulo = "Edit";

        if (params['consulta'] == '1') {
          this.titulo = "Consult";
          this.formulario.disable();
        }

        this.consultSubject(params["id"]);
      }
    });
  }

  consultSubject(id: number) {
    this.courseService.consultId(id)
      .subscribe(course => {
        this.formulario.reset(course);
        course.subjects.forEach(sub => this.addSubject(sub));
        this.spinner.hide();
      });
  }

  showSubjects() {
    this.subjectService.consultByCourse(this.formulario.get('id').value)
      .subscribe(subjects => {
        subjects.forEach(sub => this.addSubject(sub));
        this.spinner.hide();
      });
  }

  addSubject(subject: SubjectDTOarray): void {
    this.subjects = this.formulario.get('subjects') as FormArray;

    let subjectFormGroup = SubjectDTOarray.createFormGroup(this.formBuilder);
    subjectFormGroup.reset(subject);

    this.subjects.push(subjectFormGroup);
  }

  setSubject(i: number) {
    if (this.formulario.disabled) return;

    this.formulario.markAsTouched();
    this.subjects.controls[i].get('checked').setValue(!this.subjects.controls[i].value.checked);
  }

  searchCoordinator() {
    if (this.formulario.disabled) return;

    this.userSearchService.selectCoordinator()
      .then(user => {
        this.coordinators = this.formulario.get('coordinators') as FormArray;

        let userFormGroup = UserDTO.createFormGroup(this.formBuilder);
        userFormGroup.reset(user);

        if (this.coordinators.length > 0) {
          this.coordinators.removeAt(0);
        }

        this.coordinators.push(userFormGroup);
      });
  }

  onSubmit() {
    if (this.formulario.disabled) return;
    if (!this.isValid()) return;

    this.spinner.show();

    let salvar: Course = { ... this.formulario.value };

    this.courseService.save(salvar)
      .then(dados => {
        this.spinner.hide();

        if (dados) this.back();
      });
  }

  back() {
    this.router.navigateByUrl('/course');
  }
}