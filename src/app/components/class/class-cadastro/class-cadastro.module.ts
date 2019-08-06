import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { ClassCadastroComponent } from './class-cadastro.component';
import { ClassCadastroRoutingModule } from './class-cadastro-routing.module';
import { ClassDataService } from '../class.data.service';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { SubjectSearchModule } from '../../subject/subject-search/subject-search.module';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    ClassCadastroRoutingModule,
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
    ClassCadastroComponent,
  ],
  providers: [
    ClassDataService
  ]
})
export class ClassCadastroModule { }