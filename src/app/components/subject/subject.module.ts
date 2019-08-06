import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { MyTableModule } from 'src/app/shared/modules/my-table/my-table.module';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { PermissionModule } from 'src/app/core/manager/permission.module';
import { SubjectComponent } from './subject.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectDataService } from './subject.data.service';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    MyTableModule,
    PageHeaderModule,
    PermissionModule,
    ReactiveFormsModule,
    SharedPipesModule,
    SubjectRoutingModule,
    TranslateModule,
  ],
  declarations: [
    SubjectComponent,
  ],
  providers: [
    SubjectDataService
  ]
})
export class SubjectModule { }