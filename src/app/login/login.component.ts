import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Login } from './login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    formulario: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        public router: Router,
        private translate: TranslateService,
    ) {
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

    onLoggedin() {
        this.loginService.logar(this.formulario.value)
            .then(() => {
                this.router.navigateByUrl(this.router.url.replace('login', ''));
            });
    }
}