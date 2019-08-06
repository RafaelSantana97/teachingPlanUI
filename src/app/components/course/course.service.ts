import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/base-classes/base-service';
import { Course } from './course.model';

@Injectable()
export class CourseService extends BaseService<Course> {

  constructor(injector: Injector) {
    super(injector, 'course');
  }
}