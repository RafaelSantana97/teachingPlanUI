import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() heading: string;
  @Input() icon: string;
}