import { Injectable } from '@angular/core';
import { PermissionType } from './permission-type';
import { Role } from './role';
import { Resource } from './resource';
import { PermissionBase } from './permissions/base.permissions';
import { PermissionsFactory } from './permissions/factory.permissions';

@Injectable()
export class PermissionManagerService {

  private static permissions: PermissionBase;

  constructor() {
    PermissionManagerService.permissions = PermissionsFactory.getInstance();
  }

  isGranted(resource: Resource, permission: PermissionType): boolean {
    if (!PermissionManagerService.permissions) PermissionManagerService.permissions = PermissionsFactory.getInstance();

    for (const res of PermissionManagerService.permissions.permissions) {
      if (resource == res.resource) {
        for (const perm of res.permissions) {
          if (perm == permission) {
            return true;
          }
        }
      }
    }
    return false;
  }

  authAs(role: Role) {
    localStorage.setItem('role', (role === null) ? Role.UNKNOWN : role);
    PermissionManagerService.permissions = PermissionsFactory.getInstance();
  }

  flushPermissions() {
    PermissionManagerService.permissions = null;
    PermissionsFactory.instance = null;
    localStorage.removeItem('role');
  }
}