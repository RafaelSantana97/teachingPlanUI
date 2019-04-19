import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { BaseSearchModal } from 'src/app/shared/classes-padrao/base-search-modal';
import { Course } from '../course.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

        this.courseService.consultIntervalDescription(this.page, this.itemsPerPage, this.descriptionSearch)
            .subscribe(retorno => {
                //if (retorno.httpStatus === 200) {
                this.courses = retorno.content;
                // }
            });
    }
}