import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptySearchModule } from '../empty-search/empty-search.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TranslateModule } from '@ngx-translate/core';
import { MyTableComponent } from './my-table.component';

@NgModule({
  declarations: [
    MyTableComponent
  ],
  imports: [
    CommonModule,
    EmptySearchModule,
    PaginationModule,
    TranslateModule,
  ],
  exports: [MyTableComponent]
})
export class MyTableModule { }