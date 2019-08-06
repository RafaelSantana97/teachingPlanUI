import { Injectable, Injector } from '@angular/core';

import { BaseDataService } from 'src/app/shared/base-classes/base-data-service';
import { Signup } from './signup.model';

@Injectable()
export class SignupDataService extends BaseDataService<Signup> {

  constructor(injector: Injector) {
    super(injector, 'user');
  }
}