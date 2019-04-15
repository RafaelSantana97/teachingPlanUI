import { Disciplina, DisciplinaDTO } from '../disciplina/disciplina.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioDTO, Usuario } from '../usuario/usuario.model';

export class Turma {
    id: number = null;
    codigo: string = null;
    periodo: number = null;
    semestre: string = null;
    ano: number = null;
    disciplina: Disciplina | DisciplinaDTO = new Disciplina();
    professor: Usuario | UsuarioDTO = new Usuario();

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            codigo: null,
            periodo: null,
            semestre: null,
            ano: null,
            disciplina: DisciplinaDTO.createFormGroup(formBuilder),
            professor: UsuarioDTO.createFormGroup(formBuilder)
        });
    }
}

export class TurmaDTO {
    id: number = null;
    nome: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: { value: null, disabled: false },
            nome: { value: null, disabled: true },
        });
    }
}