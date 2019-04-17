import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { ClassPesquisaComponent } from './class-pesquisa.component';
import { ClassService } from '../class.service';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';
import { UserPesquisaModule } from '../../user/user-pesquisa/user-pesquisa.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
    PageHeaderModule,
    PesquisaVaziaModule,
    TranslateModule,
    UserPesquisaModule
  ],
  declarations: [
    ClassPesquisaComponent,
  ],
  providers: [
    ClassService
  ]
})
export class ClassPesquisaModule { }
