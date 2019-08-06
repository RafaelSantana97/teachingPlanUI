import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogModule } from 'src/app/shared/modules/dialog/dialog.module';
import { MyTableModule } from 'src/app/shared/modules/my-table/my-table.module';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { PermissionModule } from 'src/app/core/manager/permission.module';
import { GrantingPermissionsComponent } from './granting-permissions.component';
import { GrantingPermissionsRoutingModule } from './granting-permissions-routing.module';
import { GrantingPermissionsDataService } from './granting-permissions.data.service';
import { SharedPipesModule } from 'src/app/shared';
import { TranslateModule } from '@ngx-translate/core';

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
    GrantingPermissionsRoutingModule,
    TranslateModule,
  ],
  declarations: [
    GrantingPermissionsComponent,
  ],
  providers: [
    GrantingPermissionsDataService
  ]
})
export class GrantingPermissionsModule { }