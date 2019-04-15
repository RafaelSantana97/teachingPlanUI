import { Injectable } from "@angular/core";
import { UsuarioPesquisaComponent } from "./usuario-pesquisa.component";
import { Usuario } from "../usuario.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class UsuarioPesquisaService {
    constructor(private modalService: NgbModal) { }

    selecionar(): Promise<Usuario> {
        const modalRef = this.modalService.open(UsuarioPesquisaComponent, { size: "lg" });
        modalRef.componentInstance.tituloModal = "Pesquisar";
        return modalRef.result;
    }

    selecionarProfessor(): Promise<Usuario> {
        const modalRef = this.modalService.open(UsuarioPesquisaComponent, { size: "lg" });
        modalRef.componentInstance.tituloModal = "Pesquisar";
        return modalRef.result;
    }
}