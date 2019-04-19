import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { BaseSearchModal } from 'src/app/shared/classes-padrao/base-search-modal';
import { User } from '../user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent extends BaseSearchModal<User> {

    users: User[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private userService: UserService,
    ) { super(activeModal) }

    carregar() {
        this.emptySearch = false;

        this.userService.consultarIntervaloDescricao(this.page, this.itemsPerPage, this.descriptionSearch)
            .subscribe(users => {
                this.users = users.content;
                this.totalElements = users.totalElements;
                this.emptySearch = users.totalElements === 0;
            });
    }
}