import { Injectable, Injector } from '@angular/core';

import { Pagination } from 'src/app/core/my-response.model';
import { BaseDataService } from 'src/app/shared/base-classes/base-data-service';
import { User, PROFILE } from './user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserDataService extends BaseDataService<User> {

  constructor(injector: Injector) {
    super(injector, 'user');
  }

  // TODO: rename or refact this method
  consultIntervalDescription2(page: number, count: number, description: string, lookFor?: PROFILE): Observable<Pagination<User>> {
    //if (!lookFor) return super.consultIntervalDescription(page, count, description);

    if (description && description !== '') {
      const observable = this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + "/" + lookFor + "/" + description, this.httpOtions);
      return this.getHandledObservable(observable);
    }

    const observable = this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + "/" + lookFor, this.httpOtions);
    return this.getHandledObservable(observable);
  }

  getName(): Observable<User> {
    const observable = this.httpBase.get<Pagination<User>>(this.urlBase + "/getSimpleUser", this.httpOtions);
    return this.getHandledObservable(observable);
  }
}