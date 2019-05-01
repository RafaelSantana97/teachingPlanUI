import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() totalElements: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() page: number = 1;
  @Input() adjacentPages: number = 3;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  paged() {
    this.pageChange.emit(this.page);
  }
}