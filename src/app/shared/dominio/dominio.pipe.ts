import { DominioService } from './../dominios-rhnet/dominios-rhnet.service';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'dominio' })
export class PipeDominio implements PipeTransform {

    constructor(private dominiosService: DominioService) { }

    transform(value: string, nomeDominio: string) {
        if (!value) return '';
        value = value.toString().toUpperCase();
        nomeDominio = nomeDominio.toUpperCase();

        let dominiosFiltrados = this.dominiosService.consultarDominios(nomeDominio);
        let dominio = dominiosFiltrados.find(dom => dom.abreviacao === value || dom.valorMinimo === value);
        if (dominio) return dominio.significado;

        return value;
    }
}