import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseDataService } from './course.data.service';
import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { PermissionModule } from './../../core/manager/permission.module';
import { MyTableModule } from 'src/app/shared/modules/my-table/my-table.module';


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    DialogModule,
    FormsModule,
    MyTableModule,
    PageHeaderModule,
    PermissionModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    CourseComponent,
  ],
  providers: [
    CourseDataService
  ]
})
export class CourseModule { }