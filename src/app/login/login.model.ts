import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Login {
  email: string;
  senha: string;

  static createFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      senha: [null, Validators.required],
    });
  }
}