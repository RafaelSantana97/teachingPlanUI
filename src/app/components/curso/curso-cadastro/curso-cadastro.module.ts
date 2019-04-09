import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { CursoCadastroComponent } from './curso-cadastro.component';
import { CursoCadastroRoutingModule } from './curso-cadastro-routing.module';
import { CursoService } from '../curso.service';
import { UsuarioPesquisaModule } from '../../usuario/usuario-pesquisa/usuario-pesquisa.module';

@NgModule({
  imports: [
    CommonModule,
    CursoCadastroRoutingModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    TranslateModule,
    UsuarioPesquisaModule
  ],
  declarations: [
    CursoCadastroComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursoCadastroModule { }