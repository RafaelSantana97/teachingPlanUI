import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { SubjectComponent } from './subject.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectService } from './subject.service';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    EmptySearchModule,
    FormsModule,
    PageHeaderModule,
    PaginationModule,
    ReactiveFormsModule,
    SharedPipesModule,
    SubjectRoutingModule,
    TranslateModule,
  ],
  declarations: [
    SubjectComponent,
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectModule { }