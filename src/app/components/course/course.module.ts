import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseService } from './course.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    DialogModule,
    EmptySearchModule,
    FormsModule,
    PageHeaderModule,
    PaginationModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    CourseComponent,
  ],
  providers: [
    CourseService
  ]
})
export class CourseModule { }