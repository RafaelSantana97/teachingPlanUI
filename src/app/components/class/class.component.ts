import { Component, Injector } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

import { BaseSearchComponent } from 'src/app/shared/base-classes/base-search-component';
import { Class } from './class.model';
import { ClassDataService } from './class.data.service';

@Component({
  selector: 'tp-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  animations: [routerTransition()]
})
export class ClassComponent extends BaseSearchComponent<Class> {

  constructor(
    injector: Injector,
    classDataService: ClassDataService,
  ) { super(injector, classDataService) }
}