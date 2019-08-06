import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaitForApprovalComponent } from './wait-for-approval.component';

const routes: Routes = [
  {
    path: '', component: WaitForApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitForApprovalRoutingModule {
}