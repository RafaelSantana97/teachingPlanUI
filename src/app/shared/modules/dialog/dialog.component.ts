import { Component, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tp-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {

  constructor(
    public activeModel: NgbActiveModal,
    public changeRef: ChangeDetectorRef
  ) { }

  public retornaTrue(): void {
    this.activeModel.close(true);
  }

  public retornaFalse(): void {
    this.activeModel.close(false);
  }
}