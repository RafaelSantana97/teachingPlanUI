import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { CourseSearchComponent } from './course-search.component';
import { CourseSearchService } from './course-search.service';
import { CourseService } from '../course.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    EmptySearchModule,
    FormsModule,
    NgbModalModule,
    PaginationModule,
    ReactiveFormsModule,
    SharedPipesModule,
    TranslateModule,
  ],
  declarations: [
    CourseSearchComponent,
  ],
  providers: [
    CourseService,
    CourseSearchService
  ],
  entryComponents: [
    CourseSearchComponent
  ]
}) export class CourseSearchModule { }