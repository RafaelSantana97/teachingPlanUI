import { Injectable, Injector } from '@angular/core';

import { Pagination } from 'src/app/core/my-response.model';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { User, PROFILE } from './user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService extends BaseService<User> {

  constructor(injector: Injector) {
    super(injector, 'user');
  }

  consultIntervalDescription2(page: number, count: number, description: string, lookFor?: PROFILE): Observable<Pagination<User>> {
    //if (!lookFor) return super.consultIntervalDescription(page, count, description);

    if (description && description !== '') {
      let observable = this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + "/" + lookFor + "/" + description, this.httpOtions);
      return this.getHandledObservable(observable);
    }

    let observable = this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + "/" + lookFor, this.httpOtions);
    return this.getHandledObservable(observable);
  }
}