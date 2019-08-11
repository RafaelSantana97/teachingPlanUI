import { UserSimpleDTO, User } from "../user/user.model";
import { BaseModel } from "src/app/shared/base-classes/base-model";
import { Class } from '../class/class.model';
import { Course } from '../course/course.model';

export interface Subject extends BaseModel {
  id: number;
  name: string;
  type: string;
  responsible: User | UserSimpleDTO;
  classes: Class[];
  courses: Course[];
}

export interface SubjectDTO {
  id: number;
  name: string;
}

export interface SubjectDTOarray {
  id: number;
  name: string;
  type: string;
  responsible: User | UserSimpleDTO;
  checked: boolean;
}