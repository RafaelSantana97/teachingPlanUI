import { Injectable, Injector } from '@angular/core';
import { BaseDataService } from 'src/app/shared/base-classes/base-data-service';
import { Course } from './course.model';

@Injectable()
export class CourseDataService extends BaseDataService<Course> {

  constructor(injector: Injector) {
    super(injector, 'course');
  }
}