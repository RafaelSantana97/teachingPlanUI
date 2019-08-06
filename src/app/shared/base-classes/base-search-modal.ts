import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseModel } from "./base-model";
import { BaseDataService } from "./base-data-service";
import { BaseSearch } from "./base-search";

export abstract class BaseSearchModal<T extends BaseModel> extends BaseSearch<T> {

  constructor(
    private activeModal: NgbActiveModal,
    someService: BaseDataService<T>
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