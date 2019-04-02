import { FormsModule } from '@angular/forms';
import { DisciplinaPesquisaService } from './disciplina-pesquisa/disciplina-pesquisa.service';
import { DisciplinaPesquisaComponent } from './disciplina-pesquisa/disciplina-pesquisa.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaService } from './disciplina.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DisciplinaRoutingModule,
    PageHeaderModule,
    TranslateModule,
  ],
  declarations: [
    DisciplinaComponent
  ],
  providers: [
    DisciplinaService
  ]
})
export class DisciplinaModule { }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    //NgxSpinnerModule,
    //PaginacaoModule,
    //PesquisaVaziaModule,
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