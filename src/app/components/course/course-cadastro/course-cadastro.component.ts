import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
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

  usedSubjects: SubjectDTOarray[] = [];
  notUsedSubjects: SubjectDTOarray[] = [];

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

        this.consultCourse(params["id"]);
      }
    });
  }

  consultCourse(id: number) {
    this.courseService.consultId(id)
      .then(course => {
        this.formulario.reset(course);
        course.subjects.forEach(sub => this.addSubject(sub));
      });
  }

  showSubjects() {
    this.subjectService.consultByCourse(this.formulario.get('id').value)
      .then(subjects => {
        subjects.forEach(sub => this.addSubject(sub));
      });
  }

  addSubject(subject: SubjectDTOarray): void {
    this.subjects = this.formulario.get('subjects') as FormArray;

    let subjectFormGroup = SubjectDTOarray.createFormGroup(this.formBuilder);
    subjectFormGroup.reset(subject);

    this.subjects.push(subjectFormGroup);

    if (subject.checked) this.usedSubjects.push(subject);
    else this.notUsedSubjects.push(subject);
  }

  drop(event: CdkDragDrop<SubjectDTOarray[]>) {
    if (this.formulario.disabled) return;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    event.container.data.forEach(sub => this.setSubject(sub.id, event.container.id === "used"));
  }

  setSubject(i: number, checked: boolean) {
    if (this.formulario.disabled) return;

    this.formulario.markAsTouched();
    this.subjects.controls.find(sub => sub.value.id === i).get('checked').setValue(checked);
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

    let course: Course = { ... this.formulario.value };

    this.courseService.save(course)
      .then(() => this.back());
  }

  back() {
    this.router.navigateByUrl('/course');
  }
}