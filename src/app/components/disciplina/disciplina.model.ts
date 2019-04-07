import { FormBuilder, FormGroup } from "@angular/forms";
import { UsuarioDTO, Usuario } from "../usuario/usuario.model";

export class Disciplina {
    id: number = null;
    nome: string = null;
    tipo: string = null;
    responsavel: Usuario | UsuarioDTO = new Usuario();
    turmas = [];
    cursos = [];

    equals(otherDisciplina: Disciplina): boolean {
        return (otherDisciplina && this.id === otherDisciplina.id);
    }

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            nome: null,
            tipo: null,
            responsavel: UsuarioDTO.createFormGroup(formBuilder)
        });
    }
}

export class DisciplinaDTO {
    id: number = null;
    nome: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: { value: null, disabled: false },
            nome: { value: null, disabled: true },
        });
    }
}