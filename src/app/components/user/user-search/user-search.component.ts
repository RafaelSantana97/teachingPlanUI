import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

import { BaseSearchModal } from 'src/app/shared/classes-padrao/base-search-modal';
import { User, PROFILE } from '../user.model';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent extends BaseSearchModal<User> {

    users: User[] = [];
    lookFor: PROFILE;

    constructor(
        activeModal: NgbActiveModal,
        private spinner: NgxSpinnerService,
        private userService: UserService,
    ) { super(activeModal) }

    load() {
        this.spinner.show();
        this.emptySearch = false;

        this.userService.consultIntervalDescription(this.page, this.itemsPerPage, this.descriptionSearch, this.lookFor)
            .subscribe(users => {
                if (users) {
                    this.users = users.content;
                    this.totalElements = users.totalElements;
                    this.emptySearch = users.totalElements === 0;
                }

                this.spinner.hide();
            });
    }
}