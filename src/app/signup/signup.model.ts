import { BaseModel } from '../shared/base-classes/base-model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

export class Signup implements BaseModel {

    id: number;

    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;

    levelDegree: string;

    requireAdminRole: boolean;
    requireTeacherRole: boolean;
    requireCoordinatorRole: boolean;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
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
                validator: MustMatch('password', 'passwordConfirmation')
            });
    }
}

export function MustMatch(controlName: string, matchingControlName: string) {
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