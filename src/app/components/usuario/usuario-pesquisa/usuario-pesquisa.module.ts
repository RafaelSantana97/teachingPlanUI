import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { UsuarioPesquisaComponent } from './usuario-pesquisa.component';
import { UsuarioPesquisaService } from './usuario-pesquisa.service';
import { UsuarioService } from '../usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
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