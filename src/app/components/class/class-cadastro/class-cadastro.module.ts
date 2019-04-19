import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { SubjectSearchModule } from '../../subject/subject-search/subject-search.module';
import { ClassCadastroComponent } from './class-cadastro.component';
import { ClassCadastroRoutingModule } from './class-cadastro-routing.module';
import { ClassService } from '../class.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    ClassCadastroRoutingModule,
    CommonModule,
    EmptySearchModule,
    FormsModule,
    NgbPaginationModule,
    PageHeaderModule,
    ReactiveFormsModule,
    SubjectSearchModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    ClassCadastroComponent,
  ],
  providers: [
    ClassService
  ]
})
export class ClassCadastroModule { }
