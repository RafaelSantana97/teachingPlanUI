import { FormBuilder, FormGroup } from "@angular/forms";
import { UsuarioDTO, Usuario } from "../usuario/usuario.model";

export class Curso {
    id: number = null;
    nome: string = null;
    responsavel: Usuario | UsuarioDTO = new Usuario();
    turmas = [];
    cursos = [];

    equals(otherCurso: Curso): boolean {
        return (otherCurso && this.id === otherCurso.id);
    }

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            nome: null,
            responsavel: UsuarioDTO.createFormGroup(formBuilder)
        });
    }
}

export class CursoDTO {
    id: number = null;
    nome: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: { value: null, disabled: false },
            nome: { value: null, disabled: true },
        });
    }
}