import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { BaseComponent } from "./base-component";

export abstract class BasePesquisaModal<T> extends BaseComponent<T> {

    constructor(
        private activeModal: NgbActiveModal,
    ) { super() }

    fechar() {
        this.activeModal.dismiss('Cross click');
    }

    selecionarObject(object: any) {
        this.activeModal.close(object);
    }
}