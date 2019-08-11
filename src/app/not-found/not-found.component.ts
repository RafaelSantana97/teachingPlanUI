import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';

import { getLanguage } from '../shared/services/set-language.service';

@Component({
  selector: 'tp-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [routerTransition()]
})
export class NotFoundComponent implements OnInit {

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    getLanguage(this.translate);
  }
}