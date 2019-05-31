import { PermissionType } from '../permission-type';
import { Resource } from '../resource';
import { PermissionBase } from './base.permissions';
import { Permission } from '../permission';

export class UnknownPermission extends PermissionBase {

  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.CLASS, [
      ]),
      new Permission(Resource.COURSE, [
      ]),
      new Permission(Resource.SUBJECT, [
      ]),
      new Permission(Resource.USER, [
      ])
    ];
  }
}