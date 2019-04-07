import { FormGroup } from "@angular/forms";

export abstract class BaseCadastro<T> {

    titulo: string;
    formulario: FormGroup;

    abstract onSubmit(): void;
    abstract voltar(): void;

    isValid(): boolean {
        if (this.formulario.status === 'INVALID') {
            Object.keys(this.formulario.controls).forEach(key => {
                this.formulario.get(key).markAsTouched();
            });

            return false;
        }

        return true;
    }
}