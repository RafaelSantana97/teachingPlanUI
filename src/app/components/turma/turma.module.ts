import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { TurmaComponent } from './turma.component';
import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaService } from './turma.service';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    TurmaRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
    SharedPipesModule
  ],
  declarations: [
    TurmaComponent,
  ],
  providers: [
    TurmaService
  ]
})
export class TurmaModule { }