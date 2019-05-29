import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Login {
  email: string;
  password: string;

  static createFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
    });
  }
}