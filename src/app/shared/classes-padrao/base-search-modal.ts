import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { BaseComponent } from "./base-component";

export abstract class BaseSearchModal<T> extends BaseComponent<T> {

    constructor(
        private activeModal: NgbActiveModal,
    ) { super() }

    close() {
        this.activeModal.dismiss('Cross click');
    }

    selectObject(object: T) {
        this.activeModal.close(object);
    }
}