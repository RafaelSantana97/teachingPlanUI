import { Injectable } from "@angular/core";
import { UserSearchComponent } from "./user-search.component";
import { User } from "../user.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class UserSearchService {
    constructor(private modalService: NgbModal) { }

    selecionar(): Promise<User> {
        const modalRef = this.modalService.open(UserSearchComponent, { size: "lg" });
        return modalRef.result;
    }

    selecionarTeacher(): Promise<User> {
        const modalRef = this.modalService.open(UserSearchComponent, { size: "lg" });
        return modalRef.result;
    }
}