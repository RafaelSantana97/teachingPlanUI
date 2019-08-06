import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Signup } from './signup.model';

export class SignupService {

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Signup> {
    return formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      passwordConfirmation: [null, Validators.required],

      levelDegree: { value: "", disabled: false },

      requireAdminRole: { value: false, disabled: false },
      requireTeacherRole: { value: false, disabled: false },
      requireCoordinatorRole: { value: false, disabled: false },
    }, {
        validator: SignupService.mustMatch('password', 'passwordConfirmation')
      }) as FormGroupTyped<Signup>;
  }

  static mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}