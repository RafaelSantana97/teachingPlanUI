import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
export class CourseCadastroComponent extends BaseCadastro<Course> implements OnInit, OnDestroy {

  subjects: FormArray = new FormArray([]);
  coordinators: FormArray = new FormArray([]);

  usedSubjects: SubjectDTOarray[] = [];
  notUsedSubjects: SubjectDTOarray[] = [];

  unsubscribeFromSubjectsQuery$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private subjectService: SubjectService,
    private userSearchService: UserSearchService
  ) { super() }

  ngOnInit(): void {
    this.form = Course.createFormGroup(this.formBuilder);
    this.coordinators = this.form.get('coordinators') as FormArray;
    this.subjects = this.form.get('subjects') as FormArray;

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '-1') {
        this.title = "New";
        this.showSubjects();

      } else {
        this.title = "Edit";

        if (params['consulta'] == '1') {
          this.title = "Consult";
          this.form.disable();
        }

        this.consultCourse(params["id"]);
      }
    });
  }

  consultCourse(id: number): void {
    this.courseService.consultId(id)
      .pipe(takeUntil(this.unsubscribeFromQuery$))
      .subscribe(course => {
        this.form.reset(course);
        course.subjects.forEach(sub => this.addSubject(sub));
      });
  }

  showSubjects(): void {
    this.subjectService.consultByCourse(this.form.get('id').value)
      .pipe(takeUntil(this.unsubscribeFromSubjectsQuery$))
      .subscribe(subjects => {
        subjects.forEach(sub => this.addSubject(sub));
      });
  }

  addSubject(subject: SubjectDTOarray): void {
    this.subjects = this.form.get('subjects') as FormArray;

    let subjectFormGroup = SubjectDTOarray.createFormGroup(this.formBuilder);
    subjectFormGroup.reset(subject);

    this.subjects.push(subjectFormGroup);

    if (subject.checked) this.usedSubjects.push(subject);
    else this.notUsedSubjects.push(subject);
  }

  drop(event: CdkDragDrop<SubjectDTOarray[]>): void {
    if (this.form.disabled) return;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    event.container.data.forEach(sub => this.setSubject(sub.id, event.container.id === "used"));
  }

  setSubject(i: number, checked: boolean): void {
    if (this.form.disabled) return;

    this.form.markAsTouched();
    this.subjects.controls.find(sub => sub.value.id === i).get('checked').setValue(checked);
  }

  searchCoordinator(): void {
    if (this.form.disabled) return;

    this.userSearchService.selectCoordinator()
      .then(user => {
        this.coordinators = this.form.get('coordinators') as FormArray;

        let userFormGroup = UserDTO.createFormGroup(this.formBuilder);
        userFormGroup.reset(user);

        if (this.coordinators.length > 0) {
          this.coordinators.removeAt(0);
        }

        this.coordinators.push(userFormGroup);
      });
  }

  onSubmit(): void {
    if (this.form.disabled) return;
    if (!this.isValid()) return;

    let course: Course = { ... this.form.value };

    this.courseService.save(course)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => this.back());
  }

  back(): void {
    this.router.navigateByUrl('/course');
  }

  ngOnDestroy(): void {
    this.unsubscribeFromSubjectsQuery$.next();
    this.unsubscribeFromSubjectsQuery$.unsubscribe();
  }
}