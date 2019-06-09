import { BaseModel } from './../shared/classes-padrao/base-model';
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
        });
    }
}