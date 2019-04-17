import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { User } from './user.model';

@Injectable()
export class UserService extends BaseService<User> {

  constructor(http: HttpClient) {
    super(http, 'user');
  }
}