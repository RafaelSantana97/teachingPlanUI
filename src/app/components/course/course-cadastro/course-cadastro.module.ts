import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { CourseCadastroComponent } from './course-cadastro.component';
import { CourseCadastroRoutingModule } from './course-cadastro-routing.module';
import { CourseService } from '../course.service';
import { SubjectService } from '../../subject/subject.service';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    CourseCadastroRoutingModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    SharedPipesModule,
    TranslateModule,
  ],
  declarations: [
    CourseCadastroComponent
  ],
  providers: [
    CourseService,
    SubjectService
  ]
})
export class CourseCadastroModule { }