import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseSearchModal } from 'src/app/shared/classes-padrao/base-search-modal';
import { User, PROFILE } from '../user.model';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent extends BaseSearchModal<User> {

    lookFor: PROFILE;

    constructor(
        activeModal: NgbActiveModal,
        private userService: UserService,
    ) { super(activeModal, userService) }
}