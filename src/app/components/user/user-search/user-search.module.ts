import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { MyTableModule } from 'src/app/shared/modules/my-table/my-table.module';
import { UserDataService } from '../user.data.service';
import { UserSearchComponent } from './user-search.component';
import { UserSearchService } from './user-search.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyTableModule,
    NgbModalModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    UserSearchComponent,
  ],
  providers: [
    UserDataService,
    UserSearchService
  ]
}) export class UserSearchModule { }