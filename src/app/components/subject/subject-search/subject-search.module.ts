import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { MyTableModule } from 'src/app/shared/modules/my-table/my-table.module';
import { SharedPipesModule } from 'src/app/shared';
import { SubjectSearchComponent } from './subject-search.component';
import { SubjectDataService } from '../subject.data.service';
import { SubjectSearchService } from './subject-search.service';

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
    SubjectSearchComponent,
  ],
  providers: [
    SubjectDataService,
    SubjectSearchService
  ]
}) export class SubjectSearchModule { }