import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';
import { BasePesquisaModal } from 'src/app/shared/classes-padrao/base-pesquisa-modal';
import { Subject } from '../subject.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-subject-pesquisa',
    templateUrl: './subject-pesquisa.component.html',
    styleUrls: ['./subject-pesquisa.component.scss']
})
export class SubjectPesquisaComponent extends BasePesquisaModal<Subject> {

    subjects: Subject[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private subjectService: SubjectService,
    ) { super(activeModal) }

    carregar() {
        this.pesquisaVazia = false;

        this.subjectService.consultarIntervaloDescricao(this.pagina, this.itensPorPagina, this.pesquisaDesc)
            .subscribe(retorno => {
                //if (retorno.httpStatus === 200) {
                this.subjects = retorno.content;
                this.totalRegistro = retorno.totalElements;
                this.pesquisaVazia = retorno.totalElements === 0;
                // }
            });
    }
}