import { Disciplina, DisciplinaDTO } from '../disciplina/disciplina.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioDTO, Usuario } from '../usuario/usuario.model';

enum Periodo {
    Manha,
    Noite,
}

enum Semestre {
    Primeiro,
    Segundo
}

export class Turma {
    id: number = null;
    nome: string = null;
    periodo: Periodo;
    semestre: Semestre;
    ano: number = null;
    disciplina: Disciplina;
    professor: Usuario | UsuarioDTO = new Usuario();

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: null,
            periodo: null,
            semestre: null,
            ano: null,
            disciplina: DisciplinaDTO.createFormGroup(formBuilder),
            professor: UsuarioDTO.createFormGroup(formBuilder)
        });
    }

    equals(otherTurma: Turma): boolean {
        return (otherTurma && this.id === otherTurma.id);
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
