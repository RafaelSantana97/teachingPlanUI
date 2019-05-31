import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionType } from './permission-type';
import { Resource } from './resource';
import { PermissionManagerService } from './permission-manager.service';

@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManagerS: PermissionManagerService
  ) { }

  @Input() set appIsGranted(permission: Array<string>) {
    this.isGranted(permission[0] as Resource, permission[1] as PermissionType);
  }

  private isGranted(resource: Resource, permissionType: PermissionType) {
    if (this.permissionManagerS.isGranted(resource, permissionType)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}