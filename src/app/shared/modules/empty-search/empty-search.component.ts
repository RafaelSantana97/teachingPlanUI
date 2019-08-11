import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tp-empty-search',
  templateUrl: './empty-search.component.html',
  styleUrls: ['./empty-search.component.scss']
})
export class EmptySearchComponent implements OnInit {

  @Input() show: boolean;

  showScreen: boolean;

  ngOnInit() {
    this.showScreen = this.show || false;
  }
}