import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { ClassComponent } from './class.component';
import { ClassRoutingModule } from './class-routing.module';
import { ClassService } from './class.service';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ClassRoutingModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
    SharedPipesModule
  ],
  declarations: [
    ClassComponent,
  ],
  providers: [
    ClassService
  ]
})
export class ClassModule { }