import { Injectable, Injector } from '@angular/core';
import { BaseDataService } from 'src/app/shared/base-classes/base-data-service';
import { Class } from './class.model';

@Injectable()
export class ClassDataService extends BaseDataService<Class> {

  constructor(injector: Injector) {
    super(injector, 'class');
  }
}