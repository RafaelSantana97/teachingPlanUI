import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { DominioService } from "../dominio/dominio.service";
import { BaseComponent } from "./base-component";

export abstract class BasePesquisaModal<T> extends BaseComponent<T> {

    constructor(
        private activeModal: NgbActiveModal,
        dominioService?: DominioService
    ) { super(dominioService) }

    fechar() {
        this.activeModal.dismiss('Cross click');
    }

    selecionarObject(object: any) {
        this.activeModal.close(object);
    }
}