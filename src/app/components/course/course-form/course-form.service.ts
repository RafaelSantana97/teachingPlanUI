import { FormBuilder, Validators } from "@angular/forms";

import { Course } from '../course.model';
import { UserSimpleDTO } from '../../user/user.model';
import { SubjectDTOarray } from '../../subject/subject.model';

export class CourseFormService {

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Course> {
    return formBuilder.group({
      id: null,
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      coordinators: formBuilder.array([CourseFormService.createFormGroupForUserSimpleDTO(formBuilder)]),
      subjects: formBuilder.array([])
    }) as FormGroupTyped<Course>;
  }

  static createFormGroupForSubjectDTOArray(formBuilder: FormBuilder): FormGroupTyped<SubjectDTOarray> {
    return formBuilder.group({
      id: null,
      name: { value: null, disabled: false },
      type: { value: null, disabled: false },
      responsible: CourseFormService.createFormGroupForUserSimpleDTO(formBuilder),
      checked: false,
    }) as FormGroupTyped<SubjectDTOarray>;
  }

  static createFormGroupForUserSimpleDTO(formBuilder: FormBuilder): FormGroupTyped<UserSimpleDTO> {
    return formBuilder.group({
      id: [{ value: null, disabled: false }, Validators.required],
      name: { value: null, disabled: false },
      levelDegree: { value: null, disabled: false },
    }) as FormGroupTyped<UserSimpleDTO>;
  }
}