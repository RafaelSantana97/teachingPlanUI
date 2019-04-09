import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { Curso } from '../curso.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-curso-pesquisa',
    templateUrl: './curso-pesquisa.component.html',
    styleUrls: ['./curso-pesquisa.component.css']
})
export class CursoPesquisaComponent extends BasePesquisaModal<Curso> {

    cursos: Curso[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private cursoService: CursoService,
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

        this.cursoService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
            .subscribe(retorno => {
                //if (retorno.httpStatus === 200) {
                this.cursos = retorno.content;
                // }
            });
    }
}