import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { Usuario } from '../usuario.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-usuario-pesquisa',
    templateUrl: './usuario-pesquisa.component.html',
    styleUrls: ['./usuario-pesquisa.component.css']
})
export class UsuarioPesquisaComponent extends BasePesquisaModal<Usuario> {

    usuarios: Usuario[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private usuarioService: UsuarioService,
    ) { super(activeModal) }

    carregar() {
        this.pesquisaVazia = true;

        let user = new Usuario()
        user.nome = "Patrizia Palmieri"
        user.titulacao = "Dra."
        user.email = "patrizia.palmieri@facens.br"

        for (let i = 0; i < 10; i++) {
            this.usuarios.push(user);
        }
        //this.totalRegistro = 32;
        // this.usuarioService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
        //     .subscribe(usuarios => {
        //         if (usuarios && usuarios.length > 0) {
        //             console.log(usuarios)
        //         }
        //     });
    }
}