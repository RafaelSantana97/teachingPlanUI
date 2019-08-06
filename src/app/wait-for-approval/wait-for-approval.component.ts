import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tp-wait-for-approval',
  templateUrl: './wait-for-approval.component.html',
  styleUrls: ['./wait-for-approval.component.scss'],
  animations: [routerTransition()]
})
export class WaitForApprovalComponent implements OnInit {

  constructor(
    private translate: TranslateService,
  ) {
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

  ngOnInit() {
  }

}