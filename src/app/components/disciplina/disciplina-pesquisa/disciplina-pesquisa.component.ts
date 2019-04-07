import { Component } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { Disciplina } from '../disciplina.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-disciplina-pesquisa',
    templateUrl: './disciplina-pesquisa.component.html',
    styleUrls: ['./disciplina-pesquisa.component.css']
})
export class DisciplinaPesquisaComponent extends BasePesquisaModal<Disciplina> {

    disciplinas: Disciplina;

    constructor(
        activeModal: NgbActiveModal,
        private disciplinaService: DisciplinaService,
    ) { super(activeModal) }

    pesquisar() {
        this.pagina = 0;
        this.totalRegistro = 0;
        this.carregar();
    }

    limpar(): void {
        this.pesquisaDesc = '';
        this.totalRegistro = 0;
        this.pesquisaVazia = false;
    }

    carregar() {
        this.pesquisaVazia = false;

        this.disciplinaService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
            .subscribe((disciplinas: Disciplina[]) => {
                if (disciplinas && disciplinas.length > 0) {
                    console.log(disciplinas)
                }
            });
    }
}