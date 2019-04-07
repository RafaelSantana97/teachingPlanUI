import { HttpClient } from '@angular/common/http';
import { Dominio } from './dominio.model';
import { Injectable } from '@angular/core';
import { BaseService } from '../classes-padrao/base-service';

@Injectable()
export class DominioService extends BaseService<Dominio> {

    dominios: Dominio[] = [];

    constructor(http: HttpClient) {
        super(http, "dominio");
    }

    carregarDominios() {
        this.consultarTudo()
            .subscribe(dominios => {
                this.dominios = this.dominios.concat(dominios);
            });
    }

    consultarDominios(desc: string): Dominio[] {
        return this.dominios.filter(dom => desc === dom.dominio);
    }

    consultarDominiosInvert(desc: string, classe: string): Dominio {
        return this.dominios.
            find(dom => desc === dom.valor1 && classe === dom.dominio);
    }

    consultarDominiosOrdenadoPorAbreviacao(desc: string): Dominio[] {
        return this.consultarDominios(desc).sort((n1, n2) => <any>n1.abreviacao - <any>n2.abreviacao);
    }

    consultarDominiosOrdenadoPorMinimo(desc: string): Dominio[] {
        return this.consultarDominios(desc).sort((n1, n2) => <any>n1.valor1 - <any>n2.valor1);
    }

    consultarDominiosOrdenadoPorMaximo(desc: string): Dominio[] {
        return this.consultarDominios(desc).sort((n1, n2) => <any>n1.valor2 - <any>n2.valor2);
    }
}