import { FormBuilder, Validators } from "@angular/forms";

import { Login } from './login.model';

export class LoginService {

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Login> {
    return formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
    }) as FormGroupTyped<Login>;
  }
}