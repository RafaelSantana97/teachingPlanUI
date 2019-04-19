import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { BaseComponent } from "./base-component";
import { BaseModel } from "./base-model";

export abstract class BaseSearchModal<T extends BaseModel> extends BaseComponent<T> {

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