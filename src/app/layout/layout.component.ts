import { Component, OnInit } from '@angular/core';
import { DominioService } from '../shared/dominio/dominio.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;

    constructor(
        private dominioService: DominioService
    ) { }

    ngOnInit() {
        this.dominioService.carregarDominios();
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}