import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebServiceResponseHandlerService } from '../core/web-service-response-handler.service';

export class BaseService<T> {
    headers: HttpHeaders;
    urlBase: string = "";
    token: string = "";
    wsHandler: WebServiceResponseHandlerService = new WebServiceResponseHandlerService();
    httpOtions: { headers: HttpHeaders }

    constructor(
        protected httpBase: HttpClient,
        url: string
    ) {
        this.urlBase = sessionStorage.getItem('urlBase') + url;
        this.token = sessionStorage.getItem('token');

        this.headers = new HttpHeaders({ 'Authorization': this.token, 'Content-Type': 'application/json' });
        this.httpOtions = { headers: this.headers };
    }

    salvar(conteudo: any) {
        return this.httpBase.post<T>(this.urlBase, conteudo, this.httpOtions)
    }

    editar(conteudo: any) {
        return this.httpBase.put(this.urlBase, conteudo, this.httpOtions)
    }

    deletar(codigo: number) {
        return this.httpBase.delete(this.urlBase + "/" + codigo, this.httpOtions)
    }

    consultarTudo() {
        return this.httpBase.get<T[]>(this.urlBase, this.httpOtions)
    }

    consultarIntervaloDescricao(inicio: number, fim: number, descricao?: string) {
        if (descricao && descricao !== '') {
            return this.httpBase.get<T[]>(this.urlBase + "/intervalo/" + inicio + "/" + fim + "/" + descricao, this.httpOtions)
        }

        return this.httpBase.get<T[]>(this.urlBase + "/intervalo/" + inicio + "/" + fim, this.httpOtions)
    }
}