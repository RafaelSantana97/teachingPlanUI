import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';
import { BaseSearchModal } from 'src/app/shared/classes-padrao/base-search-modal';
import { Subject } from '../subject.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-subject-search',
    templateUrl: './subject-search.component.html',
    styleUrls: ['./subject-search.component.scss']
})
export class SubjectSearchComponent extends BaseSearchModal<Subject> {

    subjects: Subject[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private subjectService: SubjectService,
    ) { super(activeModal) }

    carregar() {
        this.emptySearch = false;

        this.subjectService.consultarIntervaloDescricao(this.page, this.itemsPerPage, this.descriptionSearch)
            .subscribe(retorno => {
                //if (retorno.httpStatus === 200) {
                this.subjects = retorno.content;
                this.totalElements = retorno.totalElements;
                this.emptySearch = retorno.totalElements === 0;
                // }
            });
    }
}