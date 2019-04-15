import { Component } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { Disciplina } from '../disciplina.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-disciplina-pesquisa',
    templateUrl: './disciplina-pesquisa.component.html',
    styleUrls: ['./disciplina-pesquisa.component.scss']
})
export class DisciplinaPesquisaComponent extends BasePesquisaModal<Disciplina> {

    disciplinas: Disciplina[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private disciplinaService: DisciplinaService,
    ) { super(activeModal) }

    carregar() {
        this.pesquisaVazia = false;

        this.disciplinaService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
            .subscribe(retorno => {
                //if (retorno.httpStatus === 200) {
                this.disciplinas = retorno.content;
                this.totalRegistro = retorno.totalElements;
                this.pesquisaVazia = retorno.totalElements === 0;
                // }
            });
    }
}