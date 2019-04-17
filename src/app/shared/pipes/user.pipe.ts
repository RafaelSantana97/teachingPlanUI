import { Pipe, PipeTransform } from "@angular/core";
import { User } from "src/app/components/user/user.model";

@Pipe({ name: 'user' })
export class PipeUser implements PipeTransform {

    transform(value: User) {
        if (!value) return '';
        if (value.titulacao === '') return value.name;
        return value.titulacao + " " + value.name;
    }
}