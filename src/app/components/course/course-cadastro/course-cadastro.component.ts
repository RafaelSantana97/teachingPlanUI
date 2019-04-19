import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormArray } from '@angular/forms';
import { Course } from '../course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { SubjectDTOarray } from '../../subject/subject.model';
import { SubjectService } from '../../subject/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './course-cadastro.component.html',
  styleUrls: ['./course-cadastro.component.scss'],
  animations: [routerTransition()]
})
export class CourseCadastroComponent extends BaseCadastro<Course> implements OnInit {

  subjects: FormArray = new FormArray([]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private subjectService: SubjectService
  ) { super() }

  ngOnInit() {
    this.formulario = Course.createFormGroup(this.formBuilder);
    this.showSubjects();

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '-1') {
        this.titulo = "New";

      } else {
        this.titulo = "Edit";

        if (params['consulta'] == '1') {
          this.titulo = "Consult";
          this.formulario.disable();
        }
      }
    });
  }

  addSubject(subject: SubjectDTOarray, checked: boolean): void {
    this.subjects = this.formulario.get('subjects') as FormArray;

    let subjectFormGroup = SubjectDTOarray.createFormGroup(this.formBuilder);
    subjectFormGroup.reset(subject);
    subjectFormGroup.get('checked').setValue(checked);

    this.subjects.push(subjectFormGroup);
  }

  setItem(i: number) {
    if (this.formulario.disabled) return;

    this.formulario.markAsDirty();
    this.subjects.controls[i].get('checked').setValue(!this.subjects.controls[i].value.checked);
  }

  showSubjects() {
    this.subjectService.consultAll()
      .subscribe(subjects => subjects.forEach(subject => this.addSubject(subject, false)));
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