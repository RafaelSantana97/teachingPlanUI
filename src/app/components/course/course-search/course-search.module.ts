import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { CourseSearchComponent } from './course-search.component';
import { CourseSearchService } from './course-search.service';
import { CourseService } from '../course.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
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