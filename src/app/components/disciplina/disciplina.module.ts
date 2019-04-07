import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaService } from './disciplina.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DisciplinaRoutingModule,
    PageHeaderModule,
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