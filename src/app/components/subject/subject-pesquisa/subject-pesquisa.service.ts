import { Injectable } from "@angular/core";
import { SubjectPesquisaComponent } from "./subject-pesquisa.component";
import { Subject } from "../subject.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class SubjectPesquisaService {
    constructor(private modalService: NgbModal) { }

    selecionar(): Promise<Subject> {
        const modalRef = this.modalService.open(SubjectPesquisaComponent, { size: "lg" });
        return modalRef.result;
    }
}