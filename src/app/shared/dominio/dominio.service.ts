import { HttpClient } from '@angular/common/http';
import { Dominio } from './dominio.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseServicePadrao } from '../classes-padrao/base-service';

@Injectable()
export class DominioService extends BaseServicePadrao {

    dominios: Dominio[] = [];

    constructor(private http: HttpClient) {
        super(http, "dominio");
    }

    consultarTudo() {
        return this.http.get(this.urlBase, this.options)
    }

    carregarDominios() {
        this.consultarTudo()
            .subscribe(retorno => {
                //  if (retorno.httpStatus === 200) {
                this.dominios = this.dominios.concat(retorno.object);
                //}
            }, err => {
                console.error(err);
            });
    }

    consultarDominios(desc: string): Dominio[] {
        return this.dominios.filter(dom => desc === dom.dominio);
    }

    consultarDominiosInvert(desc: string, classe: string): Dominio {
        return this.dominios.
            find(dom => desc === dom.significado && classe === dom.dominio);
    }

    consultarDominiosOrdenadoPorAbreviacao(desc: string): Dominio[] {
        return this.consultarDominios(desc).sort((n1, n2) => <any>n1.abreviacao - <any>n2.abreviacao);
    }

    consultarDominiosOrdenadoPorMinimo(desc: string): Dominio[] {
        return this.consultarDominios(desc).sort((n1, n2) => <any>n1.valorMinimo - <any>n2.valorMinimo);
    }

    consultarDominiosOrdenadoPorMaximo(desc: string): Dominio[] {
        return this.consultarDominios(desc).sort((n1, n2) => <any>n1.valorMaximo - <any>n2.valorMaximo);
    }
}