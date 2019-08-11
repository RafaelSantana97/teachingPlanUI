import { SubjectDTO } from '../subject/subject.model';
import { UserSimpleDTO, User } from '../user/user.model';
import { BaseModel } from 'src/app/shared/base-classes/base-model';

export interface Class extends BaseModel {
  id: number;
  code: string;
  period: number;
  semester: string;
  year: number;
  subject: SubjectDTO;
  teacher: User | UserSimpleDTO;
}