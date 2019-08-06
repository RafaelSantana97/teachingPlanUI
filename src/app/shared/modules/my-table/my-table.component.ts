import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pagination } from 'src/app/core/my-response.model';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  @Input() items: Pagination<any>;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  public currentPage: number;

  ngOnInit(): void {
    this.currentPage = this.items.number + 1;
  }

  paged() {
    this.pageChange.emit(this.currentPage - 1);
  }
}