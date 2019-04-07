import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DisciplinaCadastroComponent } from './disciplina-cadastro.component';
import { DisciplinaCadastroRoutingModule } from './disciplina-cadastro-routing.module';
import { DisciplinaService } from '../disciplina.service';
import { UsuarioPesquisaModule } from '../../usuario/usuario-pesquisa/usuario-pesquisa.module';

@NgModule({
  imports: [
    CommonModule,
    DisciplinaCadastroRoutingModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    TranslateModule,
    UsuarioPesquisaModule
  ],
  declarations: [
    DisciplinaCadastroComponent
  ],
  providers: [
    DisciplinaService
  ]
})
export class DisciplinaCadastroModule { }