import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { CursoComponent } from './curso.component';
import { CursoRoutingModule } from './curso-routing.module';
import { CursoService } from './curso.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CursoRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
  ],
  declarations: [
    CursoComponent,
  ],
  providers: [
    CursoService
  ]
})
export class CursoModule { }