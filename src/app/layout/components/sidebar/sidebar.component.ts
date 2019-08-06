import { BaseManager } from '../../../shared/base-classes/base-manager';
import { Component, Output, EventEmitter, OnInit, Injector } from '@angular/core';

@Component({
    selector: 'tp-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends BaseManager implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(injector: Injector) { super(injector); }

    ngOnInit() {
        super.ngOnInit();
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
}