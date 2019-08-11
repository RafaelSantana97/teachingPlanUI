import { BaseModel } from "src/app/shared/base-classes/base-model";

export interface User extends BaseModel {
  id: number;
  name: string;
  email: string;

  levelDegree: string;

  requireAdminRole: boolean;
  requireTeacherRole: boolean;
  requireCoordinatorRole: boolean;
}

export interface UserSimpleDTO extends BaseModel {
  id: number;
  name: string;
  levelDegree: string;
}

export enum PROFILE {
  TEACHER = "teacher",
  COORDINATOR = "coordinator"
}