import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/base-classes/base-service';
import { Class } from './class.model';

@Injectable()
export class ClassService extends BaseService<Class> {

  constructor(injector: Injector) {
    super(injector, 'class');
  }
}