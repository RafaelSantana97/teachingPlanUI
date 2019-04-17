import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Class } from './class.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClassService extends BaseService<Class> {

  constructor(http: HttpClient) {
    super(http, 'class');
  }
}