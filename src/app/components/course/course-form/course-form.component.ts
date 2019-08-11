import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseForm } from 'src/app/shared/base-classes/base-form';
import { Course } from '../course.model';
import { CourseDataService } from '../course.data.service';
import { SubjectDTOarray } from '../../subject/subject.model';
import { SubjectDataService } from '../../subject/subject.data.service';
import { UserSearchService } from '../../user/user-search/user-search.service';
import { CourseFormService } from './course-form.service';

@Component({
  selector: 'tp-subject',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  animations: [routerTransition()]
})
export class CourseFormComponent extends BaseForm<Course> implements OnInit, OnDestroy {

  subjects: FormArray = new FormArray([]);
  coordinators: FormArray = new FormArray([]);

  usedSubjects: SubjectDTOarray[] = [];
  notUsedSubjects: SubjectDTOarray[] = [];

  unsubscribeFromSubjectsQuery$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private subjectDataService: SubjectDataService,
    private userSearchService: UserSearchService
  ) { super() }

  ngOnInit(): void {
    this.form = CourseFormService.createFormGroup(this.formBuilder);
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
    this.courseDataService.consultId(id)
      .pipe(takeUntil(this.unsubscribeFromQuery$))
      .subscribe(course => {
        this.form.reset(course);
        course.subjects.forEach(sub => this.addSubject(sub));
      });
  }

  showSubjects(): void {
    this.subjectDataService.consultByCourse(this.form.get('id').value)
      .pipe(takeUntil(this.unsubscribeFromSubjectsQuery$))
      .subscribe(subjects => {
        subjects.forEach(sub => this.addSubject(sub));
      });
  }

  addSubject(subject: SubjectDTOarray): void {
    this.subjects = this.form.get('subjects') as FormArray;

    let subjectFormGroup = CourseFormService.createFormGroupForSubjectDTOArray(this.formBuilder);
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

        let userFormGroup = CourseFormService.createFormGroup(this.formBuilder);
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

    this.courseDataService.save(course)
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