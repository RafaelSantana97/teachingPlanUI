import { LoginDataService } from '../login/login.data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup.routing.module';
import { SignupComponent } from './signup.component';
import { SignupDataService } from './signup.data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupBasicFormComponent } from './signup-basic-form/signup-basic-form.component';
import { SignupDetailsFormComponent } from './signup-details-form/signup-details-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SignupRoutingModule
  ],
  declarations: [
    SignupComponent,
    SignupBasicFormComponent,
    SignupDetailsFormComponent
  ],
  providers: [
    LoginDataService,
    SignupDataService
  ]
})
export class SignupModule { }