import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pagination } from '../../core/my-response.model';
import { environment } from 'src/environments/environment';

export class BaseService<T> {
    headers: HttpHeaders;
    urlBase: string = "";
    httpOtions: { headers: HttpHeaders }

    constructor(
        protected httpBase: HttpClient,
        url: string
    ) {
        this.urlBase = environment.urlBase + url;
        console.log(this.urlBase)

        let token = localStorage.getItem('token');

        this.headers = new HttpHeaders({ 'Authorization': token, 'Content-Type': 'application/json' });
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

    private save(content: T) {
        return this.httpBase.post<T>(this.urlBase, content, this.httpOtions);
    }

    private update(content: T) {
        return this.httpBase.put<T>(this.urlBase, content, this.httpOtions);
    }

    deletar(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.delete(id)
                .toPromise()
                .then(deleted => {
                    if (deleted) resolve();
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