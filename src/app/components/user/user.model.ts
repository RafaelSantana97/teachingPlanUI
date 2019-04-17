import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class User {
    id: number;
    name: string;
    titulacao: string;
    email: string;
}

export class UserDTO {
    id: number = null;
    name: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: [{ value: null, disabled: false }, Validators.required],
            name: { value: null, disabled: false },
        });
    }
}