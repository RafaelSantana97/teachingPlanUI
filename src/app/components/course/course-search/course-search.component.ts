import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseSearchModal } from 'src/app/shared/classes-padrao/base-search-modal';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-course-search',
    templateUrl: './course-search.component.html',
    styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent extends BaseSearchModal<Course> {

    courses: Course[] = [];

    constructor(
        activeModal: NgbActiveModal,
        private courseService: CourseService,
    ) { super(activeModal) }

    search() {
        this.page = 0;
        this.totalElements = 0;
        this.load();
    }

    load() {
        this.emptySearch = false;

        this.courseService
            .consultIntervalDescription(this.page, this.itemsPerPage, this.descriptionSearch)
            .then(courses => {
                this.courses = courses.content;
                this.totalElements = courses.totalElements;
                this.emptySearch = courses.totalElements === 0;
            });
    }
}