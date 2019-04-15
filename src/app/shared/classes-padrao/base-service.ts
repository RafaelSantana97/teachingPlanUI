import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyResponseHandlerService } from '../core/my-response-handler.service';
import { Pagination } from '../core/my-response.model';

export class BaseService<T> {
    headers: HttpHeaders;
    urlBase: string = "";
    token: string = "";
    wsHandler: MyResponseHandlerService<T> = new MyResponseHandlerService<T>();
    httpOtions: { headers: HttpHeaders }

    constructor(
        protected httpBase: HttpClient,
        url: string
    ) {
        this.urlBase = 'http://localhost:8080/api/' + url;

        this.token = localStorage.getItem('token');

        this.headers = new HttpHeaders({ 'Authorization': this.token, 'Content-Type': 'application/json' });
        this.httpOtions = { headers: this.headers };
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

    private save(conteudo: T) {
        return this.httpBase.post<T>(this.urlBase, conteudo, this.httpOtions);
    }

    private update(conteudo: T) {
        return this.httpBase.put<T>(this.urlBase, conteudo, this.httpOtions);
    }

    deletar(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.delete(id)
                .toPromise()
                .then(removido => {
                    if (removido) resolve();
                    else reject();
                });
        });
    }

    private delete(id: number) {
        return this.httpBase.delete<Boolean>(this.urlBase + "/" + id, this.httpOtions);
    }

    consultarId(id: number) {
        return this.httpBase.get<T>(this.urlBase + "/" + id, this.httpOtions);
    }

    consultarTudo() {
        return this.httpBase.get<T[]>(this.urlBase, this.httpOtions);
    }

    consultarIntervaloDescricao(page: number, count: number, descricao?: string) {
        if (descricao && descricao !== '') {
            return this.httpBase.get<Pagination<T>>(this.urlBase + "/intervalo/" + page + "/" + count + "/" + descricao, this.httpOtions);
        }

        return this.httpBase.get<Pagination<T>>(this.urlBase + "/intervalo/" + page + "/" + count, this.httpOtions);
    }
}