import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';

import { getLanguage } from '../shared/services/set-language.service';

@Component({
  selector: 'tp-wait-for-approval',
  templateUrl: './wait-for-approval.component.html',
  styleUrls: ['./wait-for-approval.component.scss'],
  animations: [routerTransition()]
})
export class WaitForApprovalComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  public ngOnInit(): void {
    getLanguage(this.translate);
  }
}