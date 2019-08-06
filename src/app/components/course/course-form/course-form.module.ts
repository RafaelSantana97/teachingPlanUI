import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CourseFormComponent } from './course-form.component';
import { CourseFormRoutingModule } from './course-form.routing.module';
import { CourseDataService } from '../course.data.service';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { SubjectDataService } from '../../subject/subject.data.service';
import { SharedPipesModule } from 'src/app/shared';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    CommonModule,
    CourseFormRoutingModule,
    DragDropModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    SharedPipesModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    CourseFormComponent
  ],
  providers: [
    CourseDataService,
    SubjectDataService
  ]
})
export class CourseFormModule { }