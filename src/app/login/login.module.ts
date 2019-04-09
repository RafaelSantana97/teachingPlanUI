import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

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
        LoginService
    ]
})
export class LoginModule { }
