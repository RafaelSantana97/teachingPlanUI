import { FormBuilder, FormGroup } from "@angular/forms";
import { UserDTO, User } from "../user/user.model";
import { BaseModel } from "src/app/shared/classes-padrao/base-model";

export class Course implements BaseModel {
    id: number = null;
    name: string = null;
    responsible: User | UserDTO = new User();

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            name: null,
            responsible: UserDTO.createFormGroup(formBuilder)
        });
    }
}

export class CourseDTO {
    id: number = null;
    name: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: { value: null, disabled: false },
            name: { value: null, disabled: true },
        });
    }
}