import { FormBuilder, Validators } from "@angular/forms";
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

export class UserSimpleDTO {
  id: number;
  name: string;
  levelDegree: string;

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<UserSimpleDTO> {
    return formBuilder.group({
      id: [{ value: null, disabled: false }, Validators.required],
      name: { value: null, disabled: false },
      levelDegree: { value: null, disabled: false },
    }) as FormGroupTyped<UserSimpleDTO>;
  }
}

export enum PROFILE {
  TEACHER = "teacher",
  COORDINATOR = "coordinator"
}