import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { SubjectPesquisaComponent } from './subject-pesquisa.component';
import { SubjectPesquisaService } from './subject-pesquisa.service';
import { SubjectService } from '../subject.service';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbPaginationModule,
    PesquisaVaziaModule,
    TranslateModule,
    SharedPipesModule,
  ],
  declarations: [
    SubjectPesquisaComponent,
  ],
  providers: [
    SubjectService,
    SubjectPesquisaService
  ],
  entryComponents: [
    SubjectPesquisaComponent
  ]
}) export class SubjectPesquisaModule { }