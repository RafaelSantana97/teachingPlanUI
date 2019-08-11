import { Component, OnInit } from '@angular/core';
import { DomainDataService } from '../shared/domain/domain.data.service';

@Component({
  selector: 'tp-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  collapedSideBar: boolean;

  constructor(
    private domainDataService: DomainDataService
  ) { }

  ngOnInit() {
    this.domainDataService.loadDomains();
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}