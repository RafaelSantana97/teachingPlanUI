import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserDTO, User } from "../user/user.model";
import { BaseModel } from "src/app/shared/classes-padrao/base-model";

export class Subject implements BaseModel {
    id: number = null;
    name: string = null;
    type: string = null;
    responsible: User | UserDTO = new User();
    classes = [];
    courses = [];

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
            type: [null, Validators.required],
            responsible: UserDTO.createFormGroup(formBuilder)
        });
    }
}

export class SubjectDTO {
    id: number = null;
    name: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: [{ value: null, disabled: false }, Validators.required],
            name: { value: null, disabled: false },
        });
    }
}

export class SubjectDTOarray {
    id: number = null;
    name: string = null;
    type: string = null;
    responsible: User | UserDTO = new User();
    checked: boolean;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            name: { value: null, disabled: false },
            type: { value: null, disabled: false },
            responsible: UserDTO.createFormGroup(formBuilder),
            checked: false,
        });
    }
}