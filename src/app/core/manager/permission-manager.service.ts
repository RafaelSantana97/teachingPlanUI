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
    PermissionManagerService.permissions = PermissionsFactory.getRoles();
  }

  isGranted(resource: Resource, permission: PermissionType): boolean {
    if (!PermissionManagerService.permissions) {
      PermissionManagerService.permissions = PermissionsFactory.getRoles()
    };

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

  authAs(roles: string) {
    localStorage.setItem('roles', (roles === null || roles === "") ? [Role.UNKNOWN].toString() : roles);
    PermissionManagerService.permissions = PermissionsFactory.getRoles();
  }

  flushPermissions() {
    PermissionManagerService.permissions = null;
    localStorage.removeItem('roles');
  }
}