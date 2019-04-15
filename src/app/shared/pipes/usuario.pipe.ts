import { Pipe, PipeTransform } from "@angular/core";
import { Usuario } from "src/app/components/usuario/usuario.model";

@Pipe({ name: 'usuario' })
export class PipeUsuario implements PipeTransform {

    transform(value: Usuario) {
        if (!value) return '';
        if (value.titulacao === '') return value.nome;
        return value.titulacao + " " + value.nome;
    }
}