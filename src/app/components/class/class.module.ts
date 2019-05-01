import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { EmptySearchModule } from 'src/app/shared/modules/empty-search/empty-search.module';
import { ClassComponent } from './class.component';
import { ClassRoutingModule } from './class-routing.module';
import { ClassService } from './class.service';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    ClassRoutingModule,
    CommonModule,
    DialogModule,
    EmptySearchModule,
    FormsModule,
    NgbPaginationModule,
    PageHeaderModule,
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