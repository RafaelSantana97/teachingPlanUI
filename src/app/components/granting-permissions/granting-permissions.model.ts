import { BaseModel } from "src/app/shared/base-classes/base-model";

export interface GrantingPermissions extends BaseModel {
  id: number;

  name: string;
  email: string;

  currentAdminRole: boolean;
  currentTeacherRole: boolean;
  currentCoordinatorRole: boolean;

  requiredAdminRole: boolean;
  requiredTeacherRole: boolean;
  requiredCoordinatorRole: boolean;
}