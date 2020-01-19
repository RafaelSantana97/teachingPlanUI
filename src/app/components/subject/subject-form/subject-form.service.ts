import { FormBuilder, Validators } from "@angular/forms";

import { Subject } from '../subject.model';
import { UserSimpleDTO } from '../../user/user.model';

export class SubjectFormService {

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Subject> {
    return formBuilder.group({
      id: null,
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      type: [null, Validators.required],
      responsible: SubjectFormService.createFormGroupForUserSimpleDTO(formBuilder)
    }) as FormGroupTyped<Subject>;
  }

  static createFormGroupForUserSimpleDTO(formBuilder: FormBuilder): FormGroupTyped<UserSimpleDTO> {
    return formBuilder.group({
      id: [{ value: null, disabled: false }, Validators.required],
      name: { value: null, disabled: false },
      levelDegree: { value: null, disabled: false },
    }) as FormGroupTyped<UserSimpleDTO>;
  }
}