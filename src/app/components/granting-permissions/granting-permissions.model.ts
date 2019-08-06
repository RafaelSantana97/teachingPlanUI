import { FormBuilder, Validators } from '@angular/forms';
import { BaseModel } from "src/app/shared/base-classes/base-model";

export class GrantingPermissions implements BaseModel {

  id: number;

  name: string;
  email: string;

  currentAdminRole: boolean;
  currentTeacherRole: boolean;
  currentCoordinatorRole: boolean;

  requiredAdminRole: boolean;
  requiredTeacherRole: boolean;
  requiredCoordinatorRole: boolean;

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<GrantingPermissions> {
    return formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],

      currentAdminRole: { value: false, disabled: false },
      currentTeacherRole: { value: false, disabled: false },
      currentCoordinatorRole: { value: false, disabled: false },

      requiredAdminRole: { value: false, disabled: false },
      requiredTeacherRole: { value: false, disabled: false },
      requiredCoordinatorRole: { value: false, disabled: false },
    }) as FormGroupTyped<GrantingPermissions>;
  }
}