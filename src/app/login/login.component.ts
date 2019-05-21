import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { BaseCadastro } from '../shared/classes-padrao/base-cadastro';
import { FormBuilder } from '@angular/forms';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent extends BaseCadastro<Login> implements OnInit, OnDestroy {

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        public router: Router,
        private translate: TranslateService,
    ) {
        super();

        this.translate.addLangs(['en', 'pt-BR']);
        this.translate.setDefaultLang('pt-BR');

        let storedLang = localStorage.getItem('lang');
        if (storedLang) {
            this.translate.use(storedLang);
        } else {
            localStorage.setItem('lang', this.translate.getDefaultLang());
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|pt-BR/) ? browserLang : this.translate.defaultLang);
        }
    }

    ngOnInit() {
        this.form = Login.createFormGroup(this.formBuilder);
    }

    onSubmit() {
        if (!this.isValid()) return;

        let login: Login = { ... this.form.value };

        this.loginService.logar(login)
            .pipe(takeUntil(this.unsubscribeFromSave$))
            .subscribe(() => this.router.navigateByUrl(this.router.url.replace('login', '')));
    }

    back(): void {
        throw new Error("Method not implemented.");
    }
}