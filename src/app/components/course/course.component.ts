import { Component } from '@angular/core';
import { Course } from './course.model';
import { BaseComponent } from 'src/app/shared/classes-padrao/base-component';
import { CourseService } from './course.service';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/modules/dialog/dialog.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [routerTransition()]
})
export class CourseComponent extends BaseComponent<Course> {
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private dialogService: DialogService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { super() }

  adicionar() {
    this.router.navigateByUrl(this.router.url + '/-1');
  }

  alterar() {
    if (!this.object) return;
    this.router.navigateByUrl(this.router.url + '/' + this.object.id);
  }

  deletar() {
    if (!this.object) return;

    this.dialogService.confirm()
      .then(dialog => {
        if (dialog) {
          this.courseService.delete(this.object.id)
            .then(() => this.search());
        }
      })
  }

  load() {
    this.spinner.show();
    this.emptySearch = false;

    this.courseService
      .consultIntervalDescription(this.page, this.itemsPerPage, this.descriptionSearch)
      .subscribe(courses => {
        if (courses) {
          this.courses = courses.content;
          this.totalElements = courses.totalElements;
          this.emptySearch = courses.totalElements === 0;
        }

        this.spinner.hide();
      });
  }
}