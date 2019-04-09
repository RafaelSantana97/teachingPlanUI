import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { TurmaCadastroComponent } from './turma-cadastro.component';
import { TurmaCadastroRoutingModule } from './turma-cadastro-routing.module';
import { TurmaService } from '../turma.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { UsuarioPesquisaModule } from '../../usuario/usuario-pesquisa/usuario-pesquisa.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TurmaCadastroRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    ReactiveFormsModule,
    PesquisaVaziaModule,
    TranslateModule,
    UsuarioPesquisaModule
  ],
  declarations: [
    TurmaCadastroComponent,
  ],
  providers: [
    TurmaService
  ]
})
export class TurmaCadastroModule { }