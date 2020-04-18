import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseSearchModal } from 'src/app/shared/base-classes/base-search-modal';
import { Course } from '../course.model';
import { CourseDataService } from '../course.data.service';

@Component({
  selector: 'tp-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent extends BaseSearchModal<Course> {

  constructor(
    activeModal: NgbActiveModal,
    courseDataService: CourseDataService,
  ) { super(activeModal, courseDataService); }
}