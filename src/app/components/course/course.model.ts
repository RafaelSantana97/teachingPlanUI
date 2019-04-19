import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserDTO, User } from "../user/user.model";
import { BaseModel } from "src/app/shared/classes-padrao/base-model";
import { Subject, SubjectDTO } from "../subject/subject.model";

export class Course implements BaseModel {
    id: number = null;
    name: string = null;
    coordinators: User[] | UserDTO[] = [];
    subjects: Subject[] | SubjectDTO[] = [];

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
            coordinators: formBuilder.array([]),
            subjects: formBuilder.array([])
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