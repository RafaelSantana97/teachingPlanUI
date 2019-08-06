import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';

import { BaseForm } from 'src/app/shared/base-classes/base-form';
import { Domain } from './../shared/domain/domain.model';
import { DomainDataService } from '../shared/domain/domain.data.service';
import { Login } from '../login/login.model';
import { LoginDataService } from '../login/login.data.service';
import { Signup } from './signup.model';
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

  constructor(
    private translate: TranslateService,
    private signupDataService: SignupDataService,
    private domainDataService: DomainDataService,
    private formBuilder: FormBuilder,
    private loginService: LoginDataService,
    private router: Router
  ) {
    super();

    this.translate.addLangs(['en', 'pt-BR']);
    this.translate.setDefaultLang('pt-BR');

    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.translate.use(storedLang);
    } else {
      localStorage.setItem('lang', this.translate.getDefaultLang());
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|pt-BR/) ? browserLang : this.translate.defaultLang);
    }
  }

  ngOnInit(): void {
    this.levelsDegree = this.domainDataService.consultDomains("TITULACAO");
    this.form = SignupService.createFormGroup(this.formBuilder);
  }

  onSubmit() {
    if (this.form.disabled) return;
    if (!this.isValid()) { return; }

    let signup: Signup = { ... this.form.value };

    this.signupDataService.save(signup)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => this.tryLogin(signup));
  }

  tryLogin(signup: Signup): void {
    const login: Login = {
      email: signup.email,
      password: signup.password
    }

    this.loginService.login(login)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  back() {
    this.router.navigate(['/login']);
  }
}