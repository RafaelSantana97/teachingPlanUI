import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { User, PROFILE } from './user.model';
import { Pagination } from 'src/app/core/my-response.model';

@Injectable()
export class UserService extends BaseService<User> {

  constructor(http: HttpClient) {
    super(http, 'user');
  }

  consultIntervalDescription(page: number, count: number, description: string, lookFor?: PROFILE) {
    if (!lookFor) return super.consultIntervalDescription(page, count, description);

    if (description && description !== '') {
      return this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + "/" + lookFor + "/" + description, this.httpOtions);
    }

    return this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + "/" + lookFor, this.httpOtions);
  }
}