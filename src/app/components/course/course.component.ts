import { Component, Injector } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

import { BaseSearchComponent } from 'src/app/shared/base-classes/base-search-component';
import { Course } from './course.model';
import { CourseDataService } from './course.data.service';

@Component({
  selector: 'tp-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [routerTransition()]
})
export class CourseComponent extends BaseSearchComponent<Course> {

  constructor(
    injector: Injector,
    courseDataService: CourseDataService,
  ) { super(injector, courseDataService) }
}