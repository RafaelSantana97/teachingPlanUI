import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { DialogComponent } from "./dialog.component";

@Injectable()
export class DialogService {

  constructor(private modalService: NgbModal) { }

  confirm(): Promise<Boolean> {
    const modalRef = this.modalService.open(DialogComponent);
    return modalRef.result;
  }
}