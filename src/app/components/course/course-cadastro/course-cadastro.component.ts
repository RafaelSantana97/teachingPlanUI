import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormArray } from '@angular/forms';
import { Course } from '../course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { SubjectDTOarray } from '../../subject/subject.model';
import { SubjectService } from '../../subject/subject.service';
import { UserSearchService } from '../../user/user-search/user-search.service';
import { UserDTO } from '../../user/user.model';

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
    private subjectService: SubjectService,
    private userSearchService: UserSearchService
  ) { super() }

  ngOnInit() {
    this.formulario = Course.createFormGroup(this.formBuilder);
    this.showSubjects();
    this.coordinators = this.formulario.get('coordinators') as FormArray;

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '-1') {
        this.titulo = "New";

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
      .subscribe(course => this.formulario.reset(course));
  }

  showSubjects() {
    this.subjectService.consultByCourse(this.formulario.get('id').value)
      .subscribe(subjects => subjects.forEach(subject => this.addSubject(subject, false)));
  }

  addSubject(subject: SubjectDTOarray, checked: boolean): void {
    this.subjects = this.formulario.get('subjects') as FormArray;

    let subjectFormGroup = SubjectDTOarray.createFormGroup(this.formBuilder);
    subjectFormGroup.reset(subject);
    subjectFormGroup.get('checked').setValue(checked);

    this.subjects.push(subjectFormGroup);
  }

  setSubject(i: number) {
    if (this.formulario.disabled) return;

    this.formulario.markAsDirty();
    this.subjects.controls[i].get('checked').setValue(!this.subjects.controls[i].value.checked);
  }

  searchCoordinator() {
    this.userSearchService.select()
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
    if (!this.isValid()) return;

    let salvar: Course = { ... this.formulario.value };

    this.courseService.save(salvar)
      .then(() => this.back());
  }

  back() {
    this.router.navigateByUrl('/course');
  }
}