import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { CourseSearchComponent } from './course-search.component';
import { CourseSearchService } from './course-search.service';
import { CourseService } from '../course.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    EmptySearchModule,
    FormsModule,
    NgbModalModule,
    NgbPaginationModule,
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