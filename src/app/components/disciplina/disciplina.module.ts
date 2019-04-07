import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaService } from './disciplina.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DisciplinaRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
  ],
  declarations: [
    DisciplinaComponent,
  ],
  providers: [
    DisciplinaService
  ]
})
export class DisciplinaModule { }