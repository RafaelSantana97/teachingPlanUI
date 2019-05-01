import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { ClassComponent } from './class.component';
import { ClassRoutingModule } from './class-routing.module';
import { ClassService } from './class.service';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { SharedPipesModule } from 'src/app/shared';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';

@NgModule({
  imports: [
    ClassRoutingModule,
    CommonModule,
    DialogModule,
    EmptySearchModule,
    FormsModule,
    PageHeaderModule,
    PaginationModule,
    ReactiveFormsModule,
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