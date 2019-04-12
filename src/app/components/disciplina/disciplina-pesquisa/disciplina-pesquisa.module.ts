import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { DisciplinaPesquisaComponent } from './disciplina-pesquisa.component';
import { DisciplinaPesquisaService } from './disciplina-pesquisa.service';
import { DisciplinaService } from '../disciplina.service';
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
    DisciplinaPesquisaComponent,
  ],
  providers: [
    DisciplinaService,
    DisciplinaPesquisaService
  ],
  entryComponents: [
    DisciplinaPesquisaComponent
  ]
}) export class DisciplinaPesquisaModule { }