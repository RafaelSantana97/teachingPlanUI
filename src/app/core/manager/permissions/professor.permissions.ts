import { PermissionType } from '../permission-type';
import { Resource } from '../resource';
import { PermissionBase } from './base.permissions';
import {Permission } from '../permission';

export class ProfessorPermission extends PermissionBase {

  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.CLASS, [
        PermissionType.READ,
      ]),
      new Permission(Resource.COURSE, [
        PermissionType.READ,
      ]),
      new Permission(Resource.SUBJECT, [
        PermissionType.READ,
      ]),
      new Permission(Resource.USER, [
        PermissionType.READ,
      ])
    ];
  }
}