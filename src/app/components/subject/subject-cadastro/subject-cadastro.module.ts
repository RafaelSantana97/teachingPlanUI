import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { SubjectCadastroComponent } from './subject-cadastro.component';
import { SubjectCadastroRoutingModule } from './subject-cadastro-routing.module';
import { SubjectService } from '../subject.service';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    CommonModule,
    SubjectCadastroRoutingModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    SubjectCadastroComponent
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectCadastroModule { }