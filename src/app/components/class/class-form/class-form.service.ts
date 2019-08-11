import { FormBuilder, Validators } from '@angular/forms';

import { Class } from '../class.model';
import { SubjectDTO } from '../../subject/subject.model';
import { UserSimpleDTO } from '../../user/user.model';

export class ClassFormService {

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Class> {
    const currentYear = new Date().getFullYear();
    return formBuilder.group({
      id: null,
      code: [null, [Validators.required, Validators.maxLength(10)]],
      period: [null, [Validators.required, Validators.min(1), Validators.max(3)]],
      semester: [null, [Validators.required, Validators.maxLength(2)]],
      year: [null, [Validators.required, Validators.min(currentYear - 5), Validators.max(currentYear + 5)]],
      subject: ClassFormService.createFormGroupForSubjectDTO(formBuilder),
      teacher: ClassFormService.createFormGroup(formBuilder)
    }) as FormGroupTyped<Class>;
  }

  static createFormGroupForSubjectDTO(formBuilder: FormBuilder): FormGroupTyped<SubjectDTO> {
    return formBuilder.group({
      id: [{ value: null, disabled: false }, Validators.required],
      name: { value: null, disabled: false },
    }) as FormGroupTyped<SubjectDTO>;
  }

  static createFormGroupForUserSimpleDTO(formBuilder: FormBuilder): FormGroupTyped<UserSimpleDTO> {
    return formBuilder.group({
      id: [{ value: null, disabled: false }, Validators.required],
      name: { value: null, disabled: false },
      levelDegree: { value: null, disabled: false },
    }) as FormGroupTyped<UserSimpleDTO>;
  }
}