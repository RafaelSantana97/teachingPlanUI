import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";

import { BaseModel } from "./base-model";
import { BaseService } from "./base-service";
import { BaseSearch } from "./base-search";

export abstract class BaseSearchModal<T extends BaseModel> extends BaseSearch<T> {

    constructor(
        private activeModal: NgbActiveModal,
        someService: BaseService<T>
    ) {
        super(someService);
        this.itemsPerPage = 8;
    }

    close(): void {
        this.activeModal.dismiss('Cross click');
    }

    selectObject(object: T): void {
        this.activeModal.close(object);
    }
}