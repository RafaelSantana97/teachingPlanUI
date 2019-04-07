import { Injectable } from "@angular/core";
import { DisciplinaPesquisaComponent } from "./disciplina-pesquisa.component";
import { Disciplina } from "../disciplina.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class DisciplinaPesquisaService {
    constructor(private modalService: NgbModal) { }

    selecionar(): Promise<Disciplina> {
        const modalRef = this.modalService.open(DisciplinaPesquisaComponent, { size: "lg" });
        modalRef.componentInstance.tituloModal = "Pesquisar";
        modalRef.componentInstance.changeRef.markForCheck();
        return modalRef.result;
    }
}