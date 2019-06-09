import { User } from './../components/user/user.model';
import { LoginService } from './../login/login.service';
import { Domain } from './../shared/domain/domain.model';
import { FormBuilder } from '@angular/forms';
import { DomainService } from './../shared/domain/domain.service';
import { BaseCadastro } from 'src/app/shared/classes-padrao/base-cadastro';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { Signup } from './signup.model';
import { takeUntil } from 'rxjs/operators';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { Login } from '../login/login.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent extends BaseCadastro<Signup> implements OnInit {

    levelsDegree: Domain[] = [];

    constructor(
        private translate: TranslateService,
        private signupService: SignupService,
        private domainService: DomainService,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
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
        this.levelsDegree = this.domainService.consultDomains("TITULACAO");
        this.form = Signup.createFormGroup(this.formBuilder);
    }

    onSubmit() {
        if (this.form.disabled) return;
        if (!this.isValid()) { return; }

        let signup: Signup = { ... this.form.value };

        this.signupService.save(signup)
            .pipe(takeUntil(this.unsubscribeFromSave$))
            .subscribe(() => this.tryLogin(signup));
    }

    tryLogin(signup: Signup): void {
        let login: Login = new Login();
        login.email = signup.email;
        login.password = signup.password;

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