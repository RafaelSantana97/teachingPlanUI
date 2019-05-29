import { Validators, FormBuilder, FormGroup } from '@angular/forms';

export class Signup {

    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.email, Validators.required]],
            password: [null, Validators.required],
            passwordConfirmation: [null, Validators.required],
            isAdminRoleRequested: [false],
            isCoordRoleRequested: [false],
            isTeacherRoleRequested: [false],
        });
    }
}