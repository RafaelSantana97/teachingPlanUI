import { PermissionType } from '../permission-type';
import { Resource } from '../resource';
import { PermissionBase } from './base.permissions';
import { Permission } from '../permission';

export class SuperuserPermission extends PermissionBase {

  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.CLASS, [
        PermissionType.CREATE,
        PermissionType.READ,
        PermissionType.UPDATE,
        PermissionType.DELETE
      ]),
      new Permission(Resource.COURSE, [
        PermissionType.CREATE,
        PermissionType.READ,
        PermissionType.UPDATE,
        PermissionType.DELETE,
      ]),
      new Permission(Resource.SUBJECT, [
        PermissionType.CREATE,
        PermissionType.READ,
        PermissionType.UPDATE,
        PermissionType.DELETE,
      ]),
      new Permission(Resource.USER, [
        PermissionType.CREATE,
        PermissionType.READ,
        PermissionType.UPDATE,
        PermissionType.DELETE,
      ])
    ];
  }
}