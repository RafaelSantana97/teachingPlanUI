import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioDTO, Usuario } from "../usuario/usuario.model";

export class Disciplina {
    id: number = null;
    nome: string = null;
    tipo: string = null;
    responsavel: Usuario | UsuarioDTO = new Usuario();
    turmas = [];
    cursos = [];

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
            tipo: [null, Validators.required],
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