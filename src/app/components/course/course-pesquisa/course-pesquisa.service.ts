import { Injectable } from "@angular/core";
import { CoursePesquisaComponent } from "./course-pesquisa.component";
import { Course } from "../course.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class CoursePesquisaService {
    constructor(private modalService: NgbModal) { }

    selecionar(): Promise<Course> {
        const modalRef = this.modalService.open(CoursePesquisaComponent, { size: "lg" });
        return modalRef.result;
    }
}