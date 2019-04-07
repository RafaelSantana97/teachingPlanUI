import { PesquisaVaziaComponent } from './pesquisa-vazia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [PesquisaVaziaComponent],
  exports: [PesquisaVaziaComponent]
})
export class PesquisaVaziaModule { }