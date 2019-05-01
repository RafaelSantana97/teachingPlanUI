import { Component, Injector } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

import { BaseSearchComponent } from 'src/app/shared/classes-padrao/base-search-component';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [routerTransition()]
})
export class CourseComponent extends BaseSearchComponent<Course> {

  constructor(
    injector: Injector,
    courseService: CourseService,
  ) { super(injector, courseService) }
}