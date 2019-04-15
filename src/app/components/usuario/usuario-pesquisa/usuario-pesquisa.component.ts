import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { Usuario } from '../usuario.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-usuario-pesquisa',
    templateUrl: './usuario-pesquisa.component.html',
    styleUrls: ['./usuario-pesquisa.component.scss']
})
export class UsuarioPesquisaComponent extends BasePesquisaModal<Usuario> {

    usuarios: Usuario[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private usuarioService: UsuarioService,
    ) { super(activeModal) }

    carregar() {
        this.pesquisaVazia = false;

        this.usuarioService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
            .subscribe(retorno => {
                // if (retorno.httpStatus === 200) {
                this.usuarios = retorno.content;
                this.totalRegistro = retorno.totalElements;
                this.pesquisaVazia = retorno.totalElements === 0;
                // }
            });
    }
}