import { NgModule } from '@angular/core';
import { PipeDominio } from '../dominio/dominio.pipe';
import { PipeDisciplina } from './disciplina.pipe';
import { PipeUsuario } from './usuario.pipe';

@NgModule({
    declarations: [
        PipeDisciplina,
        PipeDominio,
        PipeUsuario
    ],
    exports: [
        PipeDisciplina,
        PipeDominio,
        PipeUsuario
    ]
})
export class SharedPipesModule { }