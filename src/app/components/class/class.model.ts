import { SubjectDTO } from '../subject/subject.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSimpleDTO, User } from '../user/user.model';
import { BaseModel } from 'src/app/shared/classes-padrao/base-model';

export class Class implements BaseModel {
    id: number = null;
    code: string = null;
    period: number = null;
    semester: string = null;
    year: number = null;
    subject: SubjectDTO = new SubjectDTO();
    teacher: User | UserSimpleDTO = new User();

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        const currentYear = new Date().getFullYear();
        return formBuilder.group({
            id: null,
            code: [null, [Validators.required, Validators.maxLength(10)]],
            period: [null, [Validators.required, Validators.min(1), Validators.max(3)]],
            semester: [null, [Validators.required, Validators.maxLength(2)]],
            year: [null, [Validators.required, Validators.min(currentYear - 5), Validators.max(currentYear + 5)]],
            subject: SubjectDTO.createFormGroup(formBuilder),
            teacher: UserSimpleDTO.createFormGroup(formBuilder)
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