import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CourseCadastroComponent } from './course-cadastro.component';
import { CourseCadastroRoutingModule } from './course-cadastro-routing.module';
import { CourseDataService } from '../course.data.service';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { SubjectDataService } from '../../subject/subject.data.service';
import { SharedPipesModule } from 'src/app/shared';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    CommonModule,
    CourseCadastroRoutingModule,
    DragDropModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    SharedPipesModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    CourseCadastroComponent
  ],
  providers: [
    CourseDataService,
    SubjectDataService
  ]
})
export class CourseCadastroModule { }