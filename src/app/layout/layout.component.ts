import { Component, OnInit } from '@angular/core';
import { DomainService } from '../shared/domain/domain.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;

    constructor(
        private domainService: DomainService
    ) { }

    ngOnInit() {
        this.domainService.loadDomains();
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}