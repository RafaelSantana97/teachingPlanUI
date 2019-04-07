import { FormGroup } from "@angular/forms";

export abstract class BaseCadastro<T> {

    titulo: string;
    formulario: FormGroup;

    abstract onSubmit(): void;
    abstract voltar(): void;
}