import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseSearchModal } from 'src/app/shared/base-classes/base-search-modal';
import { User, PROFILE } from '../user.model';
import { UserDataService } from '../user.data.service';

@Component({
  selector: 'tp-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent extends BaseSearchModal<User> {

  lookFor: PROFILE;

  constructor(
    activeModal: NgbActiveModal,
    private userDataService: UserDataService,
  ) { super(activeModal, userDataService); }

  load(page: number): void {
    this.items$ = this.userDataService
      .consultIntervalDescription2(page, this.itemsPerPage, this.form.get("descriptionSearch").value, this.lookFor);
  }
}