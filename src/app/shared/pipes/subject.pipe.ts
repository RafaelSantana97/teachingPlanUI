import { Pipe, PipeTransform } from "@angular/core";
import { Subject } from "src/app/components/subject/subject.model";

@Pipe({ name: 'subject' })
export class PipeSubject implements PipeTransform {

  transform(value: Subject) {
    if (!value) return '';
    if (value.type !== 'L') return value.name;
    return value.name + " - LAB";
  }
}