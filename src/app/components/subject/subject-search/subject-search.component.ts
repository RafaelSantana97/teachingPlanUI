import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseSearchModal } from 'src/app/shared/classes-padrao/base-search-modal';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject.model';

@Component({
    selector: 'app-subject-search',
    templateUrl: './subject-search.component.html',
    styleUrls: ['./subject-search.component.scss']
})
export class SubjectSearchComponent extends BaseSearchModal<Subject> {

    constructor(
        activeModal: NgbActiveModal,
        subjectService: SubjectService,
    ) { super(activeModal, subjectService) }
}