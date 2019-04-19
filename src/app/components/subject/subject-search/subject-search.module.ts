import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { SubjectSearchComponent } from './subject-search.component';
import { SubjectService } from '../subject.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { SharedPipesModule } from 'src/app/shared';
import { SubjectSearchService } from './subject-search.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbPaginationModule,
    EmptySearchModule,
    TranslateModule,
    SharedPipesModule,
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