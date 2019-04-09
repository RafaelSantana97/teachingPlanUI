import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { TurmaComponent } from './turma.component';
import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaService } from './turma.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TurmaRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
  ],
  declarations: [
    TurmaComponent,
  ],
  providers: [
    TurmaService
  ]
})
export class TurmaModule { }