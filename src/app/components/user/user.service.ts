import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { User } from './user.model';
import { Pagination } from 'src/app/core/my-response.model';

@Injectable()
export class UserService extends BaseService<User> {

  constructor(http: HttpClient) {
    super(http, 'user');
  }

  consultIntervalDescription(page: number, count: number, description: string, teacher: boolean = false) {
    let teacherFilter: string = teacher ? "/teacher" : "";
    if (description && description !== '') {
      return this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + teacherFilter + "/" + description, this.httpOtions);
    }

    return this.httpBase.get<Pagination<User>>(this.urlBase + "/interval/" + page + "/" + count + teacherFilter, this.httpOtions);
  }
}