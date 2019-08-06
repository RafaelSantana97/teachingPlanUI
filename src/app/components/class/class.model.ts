import { SubjectDTO } from '../subject/subject.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserSimpleDTO, User } from '../user/user.model';
import { BaseModel } from 'src/app/shared/base-classes/base-model';

export class Class implements BaseModel {
  id: number = null;
  code: string = null;
  period: number = null;
  semester: string = null;
  year: number = null;
  subject: SubjectDTO = new SubjectDTO();
  teacher: User | UserSimpleDTO;

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Class> {
    const currentYear = new Date().getFullYear();
    return formBuilder.group({
      id: null,
      code: [null, [Validators.required, Validators.maxLength(10)]],
      period: [null, [Validators.required, Validators.min(1), Validators.max(3)]],
      semester: [null, [Validators.required, Validators.maxLength(2)]],
      year: [null, [Validators.required, Validators.min(currentYear - 5), Validators.max(currentYear + 5)]],
      subject: SubjectDTO.createFormGroup(formBuilder),
      teacher: UserSimpleDTO.createFormGroup(formBuilder)
    }) as FormGroupTyped<Class>;
  }
}

export class ClassDTO {
  id: number = null;
  name: string = null;

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<ClassDTO> {
    return formBuilder.group({
      id: { value: null, disabled: false },
      name: { value: null, disabled: true },
    }) as FormGroupTyped<ClassDTO>;
  }
}