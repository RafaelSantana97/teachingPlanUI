import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { UsuarioPesquisaComponent } from './usuario-pesquisa.component';
import { UsuarioPesquisaService } from './usuario-pesquisa.service';
import { UsuarioService } from '../usuario.service';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbPaginationModule,
    PesquisaVaziaModule,
    TranslateModule,
  ],
  declarations: [
    UsuarioPesquisaComponent,
  ],
  providers: [
    UsuarioService,
    UsuarioPesquisaService
  ],
  entryComponents: [
    UsuarioPesquisaComponent
  ]
}) export class UsuarioPesquisaModule { }