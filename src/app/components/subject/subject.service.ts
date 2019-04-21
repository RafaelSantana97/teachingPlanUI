import { Injectable, Injector } from '@angular/core';

import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Subject, SubjectDTOarray } from './subject.model';

@Injectable()
export class SubjectService extends BaseService<Subject> {

  constructor(injector: Injector) {
    super(injector, 'subject');
  }

  consultByCourse(courseId: number): Promise<SubjectDTOarray[]> {
    this.spinner.show();
    if (!courseId) courseId = -1;

    let observable = this.httpBase.get<SubjectDTOarray[]>(this.urlBase + "/byCourse/" + courseId, this.httpOtions);
    return this.getHandledPromise(observable);
  }
}