import { FormBuilder, Validators } from "@angular/forms";

export class Login {
  email: string;
  password: string;

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Login> {
    return formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
    }) as FormGroupTyped<Login>;
  }
}