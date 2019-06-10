import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { WaitForApprovalRoutingModule } from './wait-for-approval-routing.module';
import { WaitForApprovalComponent } from './wait-for-approval.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    WaitForApprovalRoutingModule
  ],
  declarations: [WaitForApprovalComponent],
})
export class WaitForApprovalModule { }
