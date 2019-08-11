import { Injectable } from "@angular/core";
import { SubjectSearchComponent } from "./subject-search.component";
import { Subject } from "../subject.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class SubjectSearchService {
  constructor(private modalService: NgbModal) { }

  select(): Promise<Subject> {
    const modalRef = this.modalService.open(SubjectSearchComponent, { size: "lg" });
    return modalRef.result;
  }
}