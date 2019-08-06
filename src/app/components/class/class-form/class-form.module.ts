import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { ClassFormComponent } from './class-form.component';
import { ClassFormRoutingModule } from './class-form.routing.module';
import { ClassDataService } from '../class.data.service';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { SubjectSearchModule } from '../../subject/subject-search/subject-search.module';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    ClassFormRoutingModule,
    CommonModule,
    EmptySearchModule,
    FormsModule,
    PageHeaderModule,
    PaginationModule,
    ReactiveFormsModule,
    SubjectSearchModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    ClassFormComponent,
  ],
  providers: [
    ClassDataService
  ]
})
export class ClassFormModule { }