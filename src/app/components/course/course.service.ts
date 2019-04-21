import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Course } from './course.model';

@Injectable()
export class CourseService extends BaseService<Course> {

  constructor(http: HttpClient) {
    super(http, 'course');
  }
}