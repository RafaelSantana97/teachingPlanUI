import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Signup } from '../signup.model';
import { slideToTop } from 'src/app/router.animations';

@Component({
  selector: 'tp-signup-basic-form',
  templateUrl: './signup-basic-form.component.html',
  styleUrls: ['./signup-basic-form.component.scss'],
  animations: [slideToTop()]
})
export class SignupBasicFormComponent {

  @Input() form: FormGroupTyped<Signup>;
  get f() { return this.form.controls; }

  @Output() submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() back: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  public onSubmit(): void {
    this.submit.emit(this.form);
  }

  public onBack(): void {
    this.back.emit();
  }
}