import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { UserSearchComponent } from './user-search.component';
import { UserService } from '../user.service';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { UserSearchService } from './user-search.service';

@NgModule({
  imports: [
    CommonModule,
    EmptySearchModule,
    FormsModule,
    NgbModalModule,
    NgbPaginationModule,
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