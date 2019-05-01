import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { UserService } from '../user.service';
import { UserSearchComponent } from './user-search.component';
import { UserSearchService } from './user-search.service';

@NgModule({
  imports: [
    CommonModule,
    EmptySearchModule,
    FormsModule,
    NgbModalModule,
    PaginationModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    UserSearchComponent,
  ],
  providers: [
    UserService,
    UserSearchService
  ],
  entryComponents: [
    UserSearchComponent
  ]
}) export class UserSearchModule { }