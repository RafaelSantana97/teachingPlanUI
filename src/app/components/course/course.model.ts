import { UserSimpleDTO, User } from "../user/user.model";
import { BaseModel } from "src/app/shared/base-classes/base-model";
import { SubjectDTOarray } from "../subject/subject.model";

export interface Course extends BaseModel {
  id: number;
  name: string;
  coordinators: User[] | UserSimpleDTO[];
  subjects: SubjectDTOarray[];
}