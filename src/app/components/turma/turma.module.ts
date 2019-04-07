import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { TurmaComponent } from './turma.component';
import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaService } from './turma.service';

@NgModule({
  imports: [
    CommonModule,
    TurmaRoutingModule,
    PageHeaderModule,
    TranslateModule,
  ],
  declarations: [
    TurmaComponent
  ],
  providers: [
    TurmaService
  ]
})
export class TurmaModule { }