import { CoordinatorPermission } from './coordinator.permissions';
import { PermissionBase } from './base.permissions';
import { Role } from '../role';
import { SuperuserPermission } from './superuser.permissions';
import { AdminPermission } from './admin.permissions';
import { ProfessorPermission } from './professor.permissions';
import { UnknownPermission } from './unknown.permissions';
import { Permission } from '../permission';
import { Resource } from '../resource';

export class PermissionsFactory {

  private static permissionByRole: { [key: string]: PermissionBase; } = {
    [Role.SUPERUSER]: new SuperuserPermission(),
    [Role.ADMIN]: new AdminPermission(),
    [Role.COORDINATOR]: new CoordinatorPermission(),
    [Role.PROFESSOR]: new ProfessorPermission(),
    [Role.UNKNOWN]: new UnknownPermission()
  };

  public static getRoles(): PermissionBase {
    const roles: Role[] = PermissionsFactory.getRolesFromLocalStorage();
    let allGrantedPermissions = new PermissionBase();
    roles.forEach(role => {

      PermissionsFactory.permissionByRole[role].permissions.forEach(permission => {

        let addedPermission = PermissionsFactory.findPermissionByResource(permission.resource, allGrantedPermissions.permissions);
        if (addedPermission) {
          addedPermission.permissions = Array.from(new Set(addedPermission.permissions.concat(permission.permissions)));
        } else {
          allGrantedPermissions.permissions.push(permission)
        }
      });
    });

    return allGrantedPermissions;
  }

  private static findPermissionByResource(resource: Resource, allGrantedPermissions: Permission[]): Permission {
    return allGrantedPermissions.find(p => p.resource === resource);
  }

  private static getRolesFromLocalStorage(): Role[] {
    let roles: Role[] = [Role.UNKNOWN];
    const rolesTxt: string = localStorage.getItem('roles');

    if (rolesTxt) {
      roles = rolesTxt.split(",") as Role[];
    }

    return roles;
  }
}