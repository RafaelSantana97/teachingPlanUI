import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { ClassSearchComponent } from './class-search.component';
import { ClassService } from '../class.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
    PageHeaderModule,
    EmptySearchModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    ClassSearchComponent,
  ],
  providers: [
    ClassService
  ]
})
export class ClassSearchModule { }
