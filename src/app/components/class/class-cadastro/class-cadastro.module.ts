import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { SubjectPesquisaModule } from '../../subject/subject-pesquisa/subject-pesquisa.module';
import { ClassCadastroComponent } from './class-cadastro.component';
import { ClassCadastroRoutingModule } from './class-cadastro-routing.module';
import { ClassService } from '../class.service';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { UserPesquisaModule } from '../../user/user-pesquisa/user-pesquisa.module';

@NgModule({
  imports: [
    CommonModule,
    SubjectPesquisaModule,
    FormsModule,
    ClassCadastroRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    ReactiveFormsModule,
    PesquisaVaziaModule,
    TranslateModule,
    UserPesquisaModule
  ],
  declarations: [
    ClassCadastroComponent,
  ],
  providers: [
    ClassService
  ]
})
export class ClassCadastroModule { }
