import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseService } from './course.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    DialogModule,
    EmptySearchModule,
    FormsModule,
    NgbPaginationModule,
    PageHeaderModule,
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