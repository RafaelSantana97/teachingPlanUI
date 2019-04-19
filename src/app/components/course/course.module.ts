import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseService } from './course.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    EmptySearchModule,
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