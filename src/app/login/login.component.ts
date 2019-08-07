import { Role } from './../core/manager/role';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { BaseForm } from '../shared/base-classes/base-form';
import { FormBuilder } from '@angular/forms';
import { getLanguage } from '../shared/services/set-language.service';
import { Login } from './login.model';
import { LoginDataService } from './login.data.service';
import { routerTransition } from '../router.animations';
import { PermissionManagerService } from '../core/manager/permission-manager.service';
import { LoginService } from './login.service';

@Component({
  selector: 'tp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent extends BaseForm<Login> implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private loginDataService: LoginDataService,
    public router: Router,
    private translate: TranslateService,
    private userS: PermissionManagerService
  ) { super(); }

  ngOnInit() {
    getLanguage(this.translate);
    this.form = LoginService.createFormGroup(this.formBuilder);
  }

  onSubmit() {
    if (!this.isValid()) return;

    let login: Login = { ... this.form.value };

    this.loginDataService.login(login)
      .pipe(takeUntil(this.unsubscribeFromSave$))
      .subscribe(() => {
        this.userS.authAs(Role.COORDINATOR);
        this.router.navigate(['']);
      });
  }

  back(): void {
    throw new Error("Method not implemented.");
  }
}