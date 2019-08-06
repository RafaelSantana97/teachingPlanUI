import { BaseManager } from '../../../shared/base-classes/base-manager';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseManager implements OnInit {

  constructor(injector: Injector) { super(injector); }

  ngOnInit() {
    super.ngOnInit();
    this.pushRightClass = 'push-right';
  }
}