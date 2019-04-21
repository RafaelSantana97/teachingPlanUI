import { Injectable } from "@angular/core";
import { UserSearchComponent } from "./user-search.component";
import { User, PROFILE } from "../user.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class UserSearchService {
    constructor(private modalService: NgbModal) { }

    select(): Promise<User> {
        const modalRef = this.modalService.open(UserSearchComponent, { size: "lg" });
        return modalRef.result;
    }

    selectTeacher(): Promise<User> {
        const modalRef = this.modalService.open(UserSearchComponent, { size: "lg" });
        modalRef.componentInstance.lookFor = PROFILE.TEACHER;
        return modalRef.result;
    }

    selectCoordinator(): Promise<User> {
        const modalRef = this.modalService.open(UserSearchComponent, { size: "lg" });
        modalRef.componentInstance.lookFor = PROFILE.COORDINATOR;
        return modalRef.result;
    }
}