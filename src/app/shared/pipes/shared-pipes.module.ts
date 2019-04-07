import { NgModule } from '@angular/core';
import { PipeDominio } from '../dominio/dominio.pipe';

@NgModule({
    declarations: [
        PipeDominio
    ],
    exports: [
        PipeDominio
    ]
})
export class SharedPipesModule { }