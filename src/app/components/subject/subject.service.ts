import { Injectable, Injector } from '@angular/core';

import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Subject, SubjectDTOarray } from './subject.model';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectService extends BaseService<Subject> {

  constructor(injector: Injector) {
    super(injector, 'subject');
  }

  consultByCourse(courseId: number): Observable<SubjectDTOarray[]> {
    if (!courseId) courseId = -1;

    let observable = this.httpBase.get<SubjectDTOarray[]>(this.urlBase + "/byCourse/" + courseId, this.httpOtions);
    return this.getHandledObservable(observable);
  }
}