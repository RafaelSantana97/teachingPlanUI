import { FormBuilder, FormGroup } from "@angular/forms";

export class Usuario {
    id: number;
    nome: string;
    titulacao: string;
    email: string;
}

export class UsuarioDTO {
    id: number = null;
    nome: string = null;

    static createFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            id: { value: null, disabled: false },
            nome: { value: null, disabled: true },
        });
    }
}