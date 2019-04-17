import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { SubjectComponent } from './subject.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectService } from './subject.service';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    SubjectRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
    SharedPipesModule,
  ],
  declarations: [
    SubjectComponent,
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectModule { }