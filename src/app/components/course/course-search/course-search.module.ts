import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { CourseSearchComponent } from './course-search.component';
import { CourseSearchService } from './course-search.service';
import { CourseDataService } from '../course.data.service';
import { MyTableModule } from 'src/app/shared/modules/my-table/my-table.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyTableModule,
    NgbModalModule,
    ReactiveFormsModule,
    SharedPipesModule,
    TranslateModule,
  ],
  declarations: [
    CourseSearchComponent,
  ],
  providers: [
    CourseDataService,
    CourseSearchService
  ],
  entryComponents: [
    CourseSearchComponent
  ]
}) export class CourseSearchModule { }