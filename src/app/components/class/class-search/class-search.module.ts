import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ClassSearchComponent } from './class-search.component';
import { ClassDataService } from '../class.data.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { UserSearchModule } from '../../user/user-search/user-search.module';

@NgModule({
  imports: [
    CommonModule,
    EmptySearchModule,
    FormsModule,
    PageHeaderModule,
    PaginationModule,
    TranslateModule,
    UserSearchModule
  ],
  declarations: [
    ClassSearchComponent,
  ],
  providers: [
    ClassDataService
  ]
})
export class ClassSearchModule { }