import { BaseModel } from '../shared/base-classes/base-model';

export interface Signup extends BaseModel {
  id: number;

  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;

  levelDegree: string;

  requireAdminRole: boolean;
  requireTeacherRole: boolean;
  requireCoordinatorRole: boolean;
}