import { FormBuilder, Validators } from "@angular/forms";
import { UserSimpleDTO, User } from "../user/user.model";
import { BaseModel } from "src/app/shared/base-classes/base-model";

export class Subject implements BaseModel {
  id: number = null;
  name: string = null;
  type: string = null;
  responsible: User | UserSimpleDTO;
  classes = [];
  courses = [];

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<Subject> {
    return formBuilder.group({
      id: null,
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      type: [null, Validators.required],
      responsible: UserSimpleDTO.createFormGroup(formBuilder)
    }) as FormGroupTyped<Subject>;
  }
}

export class SubjectDTO {
  id: number = null;
  name: string = null;

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<SubjectDTO> {
    return formBuilder.group({
      id: [{ value: null, disabled: false }, Validators.required],
      name: { value: null, disabled: false },
    }) as FormGroupTyped<SubjectDTO>;
  }
}

export class SubjectDTOarray {
  id: number = null;
  name: string = null;
  type: string = null;
  responsible: User | UserSimpleDTO;
  checked: boolean;

  static createFormGroup(formBuilder: FormBuilder): FormGroupTyped<SubjectDTOarray> {
    return formBuilder.group({
      id: null,
      name: { value: null, disabled: false },
      type: { value: null, disabled: false },
      responsible: UserSimpleDTO.createFormGroup(formBuilder),
      checked: false,
    }) as FormGroupTyped<SubjectDTOarray>;
  }
}