import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaService } from './disciplina.service';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    DisciplinaRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
    SharedPipesModule,
  ],
  declarations: [
    DisciplinaComponent,
  ],
  providers: [
    DisciplinaService
  ]
})
export class DisciplinaModule { }