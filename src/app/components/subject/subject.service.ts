import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Subject } from './subject.model';

@Injectable()
export class SubjectService extends BaseService<Subject> {

  constructor(http: HttpClient) {
    super(http, 'subject');
  }

  consultByCourse(courseId: number) {
    if (!courseId) courseId = -1;
    return this.httpBase.get<Subject[]>(this.urlBase + "/byCourse/" + courseId, this.httpOtions);
  }
}