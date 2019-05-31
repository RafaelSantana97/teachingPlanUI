import { Injector } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PermissionManagerService } from 'src/app/core/manager/permission-manager.service';

export class BaseManager {
    pushRightClass: string;

    private translate: TranslateService;
    public router: Router;
    private userS: PermissionManagerService;

    constructor(injector: Injector) {
        this.translate = injector.get(TranslateService);
        this.router = injector.get(Router);
        this.userS = injector.get(PermissionManagerService);

        this.translate.addLangs(['en', 'pt-BR']);
        this.translate.setDefaultLang('pt-BR');

        let storedLang = localStorage.getItem('lang');
        if (storedLang) {
            this.translate.use(storedLang);
        } else {
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|pt-BR/) ? browserLang : this.translate.defaultLang);
        }

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
        localStorage.setItem('lang', language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.userS.flushPermissions();
    }
}