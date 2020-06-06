import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';

import { BaseForm } from 'src/app/shared/base-classes/base-form';
import { Domain } from './../shared/domain/domain.model';
import { DomainDataService } from '../shared/domain/domain.data.service';
import { getLanguage } from '../shared/services/set-language.service';
import { Login } from '../login/login.model';
import { LoginDataService } from '../login/login.data.service';
import { Signup, SignupDTO } from './signup.model';
import { SignupDataService } from './signup.data.service';
import { SignupService } from './signup.service';

@Component({
  selector: 'tp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent extends BaseForm<Signup> implements OnInit {

  levelsDegree: Domain[] = [];

  formLevel: 'basic' | 'details' = 'basic';

  constructor(
    private translate: TranslateService,
    private signupDataService: SignupDataService,
    private domainDataService: DomainDataService,
    private formBuilder: FormBuilder,
    private loginDataService: LoginDataService,
    private router: Router
  ) { super(); }

  public ngOnInit(): void {
    getLanguage(this.translate);

    this.levelsDegree = this.domainDataService.consultDomains("TITULACAO");
    this.form = SignupService.createFormGroup(this.formBuilder);
  }

  public next(): void {
    // TODO: check this
    // if (this.form.disabled) return;
    // if (!this.isValid()) { return; }

    this.formLevel = 'details';
  }

  public onSubmit(): void {
    if (this.form.disabled) return;
    if (!this.isValid()) { return; }

    this.form.disable();

    const signup: SignupDTO = {
      id: null,
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      levelDegree: this.form.value.levelDegree,
      requestedRoles: []
    } as SignupDTO;

    if (this.form.value['requireAdminRole']) {
      signup.requestedRoles.push('ADMIN')
    }

    if (this.form.value['requireCoordinatorRole']) {
      signup.requestedRoles.push('COORDINATOR')
    }

    if (this.form.value['requireTeacherRole']) {
      signup.requestedRoles.push('TEACHER')
    }

    this.signupDataService.save(signup)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => this.tryLogin(signup));
  }

  private tryLogin(signup: SignupDTO): void {
    const login: Login = {
      email: signup.email,
      password: signup.password
    }

    this.loginDataService.login(login)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  public backToBasic(): void {
    this.formLevel = 'basic';
  }

  public back(): void {
    this.router.navigate(['/login']);
  }
}