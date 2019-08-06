import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BaseModel } from "src/app/shared/base-classes/base-model";

export class User implements BaseModel {
  id: number;
  name: string;
  email: string;

  levelDegree: string;

  requireAdminRole: boolean;
  requireTeacherRole: boolean;
  requireCoordinatorRole: boolean;
}

export class UserSimpleDTO {
  id: number = null;
  name: string = null;
  levelDegree: string;

  static createFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      id: [{ value: null, disabled: false }, Validators.required],
      name: { value: null, disabled: false },
      levelDegree: { value: null, disabled: false },
    });
  }
}

export enum PROFILE {
  TEACHER = "teacher",
  COORDINATOR = "coordinator"
}