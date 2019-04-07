import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        public router: Router
    ) {
        this.translate.addLangs(['en', 'pt-BR']);
        this.translate.setDefaultLang('pt-BR');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|pt-BR/) ? browserLang : this.translate.defaultLang);
    }

    ngOnInit() { }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
