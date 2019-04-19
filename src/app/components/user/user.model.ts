import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BaseModel } from "src/app/shared/classes-padrao/base-model";

export class User implements BaseModel {
    id: number;
    name: string;
    levelDegree: string;
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