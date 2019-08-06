import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { OnDestroy } from "@angular/core";

export abstract class BaseCadastro<T> implements OnDestroy {

  title: string;
  form: FormGroupTyped<T>;
  unsubscribeFromSave$ = new Subject();
  unsubscribeFromQuery$ = new Subject();

  abstract onSubmit(): void;
  abstract back(): void;

  protected isValid(): boolean {
    if (this.form.status === 'INVALID') {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).markAsTouched();
      });

      return false;
    }

    return true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnDestroy(): void {
    this.unsubscribeFromSave$.next();
    this.unsubscribeFromSave$.unsubscribe();

    this.unsubscribeFromQuery$.next();
    this.unsubscribeFromQuery$.unsubscribe();
  }
}