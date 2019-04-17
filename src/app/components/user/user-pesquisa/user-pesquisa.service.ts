import { Injectable } from "@angular/core";
import { UserPesquisaComponent } from "./user-pesquisa.component";
import { User } from "../user.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class UserPesquisaService {
    constructor(private modalService: NgbModal) { }

    selecionar(): Promise<User> {
        const modalRef = this.modalService.open(UserPesquisaComponent, { size: "lg" });
        modalRef.componentInstance.tituloModal = "Pesquisar";
        return modalRef.result;
    }

    selecionarTeacher(): Promise<User> {
        const modalRef = this.modalService.open(UserPesquisaComponent, { size: "lg" });
        modalRef.componentInstance.tituloModal = "Pesquisar";
        return modalRef.result;
    }
}