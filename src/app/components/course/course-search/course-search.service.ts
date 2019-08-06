import { Injectable } from "@angular/core";
import { CourseSearchComponent } from "./course-search.component";
import { Course } from "../course.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class CourseSearchService {
  constructor(private modalService: NgbModal) { }

  select(): Promise<Course> {
    const modalRef = this.modalService.open(CourseSearchComponent, { size: "lg" });
    return modalRef.result;
  }
}