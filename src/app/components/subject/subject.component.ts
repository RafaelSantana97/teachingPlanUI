import { Component, Injector } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

import { BaseSearchComponent } from 'src/app/shared/base-classes/base-search-component';
import { Subject } from './subject.model';
import { SubjectDataService } from './subject.data.service';

@Component({
  selector: 'tp-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  animations: [routerTransition()]
})
export class SubjectComponent extends BaseSearchComponent<Subject> {

  constructor(
    injector: Injector,
    subjectDataService: SubjectDataService
  ) { super(injector, subjectDataService); }
}