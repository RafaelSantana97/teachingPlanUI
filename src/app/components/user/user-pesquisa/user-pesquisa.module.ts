import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { UserPesquisaComponent } from './user-pesquisa.component';
import { UserPesquisaService } from './user-pesquisa.service';
import { UserService } from '../user.service';
import { PesquisaVaziaModule } from 'src/app/shared/modules/pesquisa-vazia/pesquisa-vazia.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbPaginationModule,
    PesquisaVaziaModule,
    TranslateModule,
  ],
  declarations: [
    UserPesquisaComponent,
  ],
  providers: [
    UserService,
    UserPesquisaService
  ],
  entryComponents: [
    UserPesquisaComponent
  ]
}) export class UserPesquisaModule { }