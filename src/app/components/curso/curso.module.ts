import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { CursoComponent } from './curso.component';
import { CursoRoutingModule } from './curso-routing.module';
import { CursoService } from './curso.service';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    PageHeaderModule,
    TranslateModule,
  ],
  declarations: [
    CursoComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursoModule { }