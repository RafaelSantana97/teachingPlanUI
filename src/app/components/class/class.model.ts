import { Subject, SubjectDTO } from '../subject/subject.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO, User } from '../user/user.model';
import { BaseModel } from 'src/app/shared/classes-padrao/base-model';

export class Class implements BaseModel {
    id: number = null;
    code: string = null;
    period: number = null;
    semester: string = null;
    year: number = null;
    subject: Subject | SubjectDTO = new Subject();
    teacher: User | UserDTO = new User();

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            code: null,
            period: null,
            semester: null,
            year: null,
            subject: SubjectDTO.createFormGroup(formBuilder),
            teacher: UserDTO.createFormGroup(formBuilder)
        });
    }
}

export class ClassDTO {
    id: number = null;
    name: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: { value: null, disabled: false },
            name: { value: null, disabled: true },
        });
    }
}