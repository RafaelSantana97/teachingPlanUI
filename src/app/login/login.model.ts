import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Login {
  email: string;
  senha: string;

  static createFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      email: ['rodrigoes@outlook.com', [Validators.email, Validators.required]],
      senha: ['1234', Validators.required],
    });
  }
}
