import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { LoginDataService } from './login.data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginDataService
  ]
})
export class LoginModule { }
