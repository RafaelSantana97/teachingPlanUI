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
        this.urlBase = 'http://localhost:8080/api/' + url;
        this.token = sessionStorage.getItem('token');

        this.headers = new HttpHeaders({ 'Authorization': this.token, 'Content-Type': 'application/json' });
        this.httpOtions = { headers: this.headers };
    }

    save(conteudo: T) {
        return this.httpBase.post<T>(this.urlBase, conteudo)
    }

    salvar(object: any): Promise<T> {
        return new Promise((resolve, reject) => {

            if (object.id) {
                this.update(object)
                    .toPromise()
                    .then(
                        dados => {
                            resolve(dados);
                        },
                        () => {
                            reject();
                        });
            } else {
                this.save(object)
                    .toPromise()
                    .then(
                        dados => {
                            resolve(dados);
                        },
                        () => {
                            reject();
                        });
            }

        });
    }

    update(conteudo: T) {
        return this.httpBase.put<T>(this.urlBase, conteudo)
    }

    deletar(codigo: number) {
        return this.httpBase.delete(this.urlBase + "/" + codigo)
    }

    consultarTudo() {
        return this.httpBase.get<T[]>(this.urlBase)
    }

    consultarIntervaloDescricao(page: number, count: number, descricao?: string) {
        if (descricao && descricao !== '') {
            return this.httpBase.get(this.urlBase + "/intervalo/" + page + "/" + count + "/" + descricao)
        }
        return this.httpBase.get<T[]>(this.urlBase + "/intervalo/" + page + "/" + count)
    }
}