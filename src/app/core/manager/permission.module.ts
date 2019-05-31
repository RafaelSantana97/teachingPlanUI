import { NgModule } from '@angular/core';
import { IsGrantedDirective } from './is-granted-directive';
import { PermissionManagerService } from './permission-manager.service';

@NgModule({
  declarations: [IsGrantedDirective],
  providers: [PermissionManagerService],
  exports: [IsGrantedDirective]
})
export class PermissionModule { }