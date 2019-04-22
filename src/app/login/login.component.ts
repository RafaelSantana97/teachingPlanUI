import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Login } from './login.model';
import { BaseCadastro } from '../shared/classes-padrao/base-cadastro';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent extends BaseCadastro<Login> implements OnInit {

    formulario: FormGroup;

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
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|pt-BR/) ? browserLang : this.translate.defaultLang);
        }
    }

    ngOnInit() {
        this.formulario = Login.createFormGroup(this.formBuilder);
    }

    onSubmit() {
        if (!this.isValid()) return;

        let login: Login = { ... this.formulario.value };

        this.loginService.logar(login)
            .then(() => {
                this.router.navigateByUrl(this.router.url.replace('login', ''));
            });
    }

    back(): void {
        throw new Error("Method not implemented.");
    }
}