import { CommonModule } from "@angular/common";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { DialogComponent } from "./dialog.component";
import { DialogService } from "./dialog.service";

@NgModule({
  imports: [CommonModule, NgbModalModule, TranslateModule],
  declarations: [DialogComponent],
  providers: [DialogService],
})
export class DialogModule { }