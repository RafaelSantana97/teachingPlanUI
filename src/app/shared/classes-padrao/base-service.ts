import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebServiceResponseHandlerService } from '../core/web-service-response-handler.service';
import { WebServiceResponse, Pagination } from '../core/web-service-response.model';

export class BaseService<T> {
    headers: HttpHeaders;
    urlBase: string = "";
    token: string = "MeuVizinhoComeChurros|=wO'M*ZDH5+46/_YEwxCom12AnosAzuiseyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2RyaWdvZXNAb3V0bG9vay5jb20iLCJleHAiOjE1NTQ3NjU1NTZ9.8dzr_BaGGJyoQNfw-E5OA4m1pvboqHuvrt-pXytLoQojqnpfRB0Z6QUERdjqCnPBUu7Tvp2OipmwFTdg0m_H3w";
    wsHandler: WebServiceResponseHandlerService<T> = new WebServiceResponseHandlerService<T>();
    httpOtions: { headers: HttpHeaders }

    constructor(
        protected httpBase: HttpClient,
        url: string
    ) {
        this.urlBase = 'http://localhost:8080/api/' + url;
        //this.token = sessionStorage.getItem('token');

        this.headers = new HttpHeaders({ 'Authorization': this.token, 'Content-Type': 'application/json' });
        this.httpOtions = { headers: this.headers };
    }

    save(conteudo: T) {
        return this.httpBase.post<T>(this.urlBase, conteudo, this.httpOtions)
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
        return this.httpBase.put<T>(this.urlBase, conteudo, this.httpOtions)
    }

    deletar(codigo: number) {
        return this.httpBase.delete(this.urlBase + "/" + codigo, this.httpOtions)
    }

    consultarTudo() {
        return this.httpBase.get<WebServiceResponse<T[]>>(this.urlBase, this.httpOtions)
    }

    consultarIntervaloDescricao(page: number, count: number, descricao?: string) {
        if (descricao && descricao !== '') {
            return this.httpBase.get<Pagination<T>>(this.urlBase + "/intervalo/" + page + "/" + count + "/" + descricao, this.httpOtions)
        }
        return this.httpBase.get<Pagination<T>>(this.urlBase + "/intervalo/" + page + "/" + count, this.httpOtions)
    }
}