import { User } from "../../components/user/user.model";
import { Observable } from "rxjs";
import { Injector, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

import { getLanguage } from '../services/set-language.service';
import { PermissionManagerService } from "src/app/core/manager/permission-manager.service";
import { UserDataService } from "../../components/user/user.data.service";

export class BaseManager implements OnInit {
  pushRightClass: string;

  private translate: TranslateService;
  public router: Router;
  private permissionManagerService: PermissionManagerService;
  private userDataService: UserDataService;

  public user$ = new Observable<User>();

  constructor(injector: Injector) {
    this.translate = injector.get(TranslateService);
    this.router = injector.get(Router);
    this.permissionManagerService = injector.get(PermissionManagerService);
    this.userDataService = injector.get(UserDataService);
  }

  ngOnInit(): void {
    getLanguage(this.translate);

    this.listenForToggleSidebar();

    this.user$ = this.userDataService.getName();
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  private listenForToggleSidebar(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  toggleSidebar() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle("rtl");
  }

  changeLang(language: string) {
    this.translate.use(language);
    localStorage.setItem("lang", language);
  }

  onLoggedout() {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("çshurros");
    this.permissionManagerService.flushPermissions();
  }
}