import { Injectable, Injector } from '@angular/core';

import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Signup } from './signup.model';

@Injectable()
export class SignupService extends BaseService<Signup> {

  constructor(injector: Injector) {
    super(injector, 'user');
  }
}