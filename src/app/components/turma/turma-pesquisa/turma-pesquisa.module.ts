import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { TurmaPesquisaComponent } from './turma-pesquisa.component';
import { TurmaService } from '../turma.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { UsuarioPesquisaModule } from '../../usuario/usuario-pesquisa/usuario-pesquisa.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
    UsuarioPesquisaModule
  ],
  declarations: [
    TurmaPesquisaComponent,
  ],
  providers: [
    TurmaService
  ]
})
export class TurmaPesquisaModule { }
