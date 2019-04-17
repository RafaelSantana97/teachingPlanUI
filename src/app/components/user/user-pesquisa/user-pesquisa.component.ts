import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { User } from '../user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-pesquisa',
    templateUrl: './user-pesquisa.component.html',
    styleUrls: ['./user-pesquisa.component.scss']
})
export class UserPesquisaComponent extends BasePesquisaModal<User> {

    users: User[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private userService: UserService,
    ) { super(activeModal) }

    carregar() {
        this.pesquisaVazia = false;

        this.userService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
            .subscribe(retorno => {
                // if (retorno.httpStatus === 200) {
                this.users = retorno.content;
                this.totalRegistro = retorno.totalElements;
                this.pesquisaVazia = retorno.totalElements === 0;
                // }
            });
    }
}