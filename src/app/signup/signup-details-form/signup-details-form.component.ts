import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Signup } from '../signup.model';
import { slideToLeft } from 'src/app/router.animations';

@Component({
  selector: 'tp-signup-details-form',
  templateUrl: './signup-details-form.component.html',
  styleUrls: ['./signup-details-form.component.scss'],
  animations: [slideToLeft()]
})
export class SignupDetailsFormComponent {

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