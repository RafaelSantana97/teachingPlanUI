import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { SharedPipesModule } from 'src/app/shared';
import { SubjectSearchComponent } from './subject-search.component';
import { SubjectService } from '../subject.service';
import { SubjectSearchService } from './subject-search.service';

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
    SubjectSearchComponent,
  ],
  providers: [
    SubjectService,
    SubjectSearchService
  ],
  entryComponents: [
    SubjectSearchComponent
  ]
}) export class SubjectSearchModule { }