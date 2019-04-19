import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { CourseCadastroComponent } from './course-cadastro.component';
import { CourseCadastroRoutingModule } from './course-cadastro-routing.module';
import { CourseService } from '../course.service';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    CommonModule,
    CourseCadastroRoutingModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    CourseCadastroComponent
  ],
  providers: [
    CourseService
  ]
})
export class CourseCadastroModule { }