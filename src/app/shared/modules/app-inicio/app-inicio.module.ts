import { RouterModule } from '@angular/router';
import { AppInicioComponent } from './app-inicio.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule],
  declarations: [AppInicioComponent],
  exports: [AppInicioComponent],
  entryComponents: [AppInicioComponent]
})
export class AppInicioModule { }