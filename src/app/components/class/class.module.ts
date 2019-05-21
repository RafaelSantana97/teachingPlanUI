import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { ClassComponent } from './class.component';
import { ClassRoutingModule } from './class-routing.module';
import { ClassService } from './class.service';
import { MyTableModule } from 'src/app/shared/modules/my-table/my-table.module';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    ClassRoutingModule,
    CommonModule,
    DialogModule,
    FormsModule,
    MyTableModule,
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