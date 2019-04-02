import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";

export class BaseServicePadrao {
    headers: Headers;
    options: RequestOptions;
    urlBase: string = "";''
    urlBaseWs: string = "";
    token: string = "";

    constructor(
        protected httpBase: HttpClient,
        url: string
    ) {
        this.urlBase = sessionStorage.getItem('urlBase') + url;
        this.urlBaseWs = sessionStorage.getItem('urlWebservice');
        this.token = sessionStorage.getItem('token');
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        this.options = new RequestOptions({ headers: this.headers });
    }

    salvar(conteudo: any) {
        return this.httpBase.post(this.urlBase, conteudo)
    }

    editar(conteudo: any) {
        return this.httpBase.put(this.urlBase, conteudo)
    }

    deletar(codigo: number) {
        return this.httpBase.delete(this.urlBase + "/" + codigo)
    }

    consultar() {
        return this.httpBase.get(this.urlBase)
    }

    consultarIntervalo(inicio: number, fim: number) {
        return this.httpBase.get(this.urlBase + "/intervalo/" + inicio + "/" + fim)
    }

    consultarIntervaloDescricao(inicio: number, fim: number, descricao: string) {
        return this.httpBase.get(this.urlBase + "/intervalo/" + inicio + "/" + fim + "/" + descricao)
    }
}