import { Pipe, PipeTransform } from "@angular/core";
import { Disciplina } from "src/app/components/disciplina/disciplina.model";

@Pipe({ name: 'disciplina' })
export class PipeDisciplina implements PipeTransform {

    transform(value: Disciplina) {
        if (!value) return '';
        if (value.tipo !== 'L') return value.nome;
        return value.nome + " - LAB";
    }
}