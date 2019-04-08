import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { CursoPesquisaComponent } from './curso-pesquisa.component';
import { CursoPesquisaService } from './curso-pesquisa.service';
import { CursoService } from '../curso.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    TranslateModule,
  ],
  declarations: [
    CursoPesquisaComponent,
  ],
  providers: [
    CursoService,
    CursoPesquisaService
  ],
  entryComponents: [
    CursoPesquisaComponent
  ]
}) export class CursoPesquisaModule { }