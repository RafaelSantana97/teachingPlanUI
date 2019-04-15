import { Injectable } from "@angular/core";
import { CursoPesquisaComponent } from "./curso-pesquisa.component";
import { Curso } from "../curso.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class CursoPesquisaService {
    constructor(private modalService: NgbModal) { }

    selecionar(): Promise<Curso> {
        const modalRef = this.modalService.open(CursoPesquisaComponent, { size: "lg" });
        return modalRef.result;
    }
}