import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { SubjectFormComponent } from './subject-form.component';
import { SubjectFormRoutingModule } from './subject-form.routing.module';
import { SubjectDataService } from '../subject.data.service';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    CommonModule,
    SubjectFormRoutingModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    SubjectFormComponent
  ],
  providers: [
    SubjectDataService
  ]
})
export class SubjectFormModule { }