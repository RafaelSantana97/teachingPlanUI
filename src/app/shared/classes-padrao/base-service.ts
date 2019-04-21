import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pagination } from '../../core/my-response.model';
import { environment } from 'src/environments/environment';
import { BaseModel } from './base-model';

export class BaseService<T> {

    private _urlBase: string = "";
    public get urlBase(): string { return this._urlBase };

    private _httpOtions: { headers: HttpHeaders };
    public get httpOtions() { return this._httpOtions };

    constructor(
        protected httpBase: HttpClient,
        url: string
    ) {
        this._urlBase = environment.urlBase + url;
        let token = localStorage.getItem('token');
        this._httpOtions = { headers: new HttpHeaders({ 'Authorization': token, 'Content-Type': 'application/json' }) };
    }

    save(object: BaseModel): Promise<T> {
        return new Promise((resolve, reject) => {
            if (object.id) {
                this.httpBase.put<T>(this.urlBase, object, this.httpOtions)
                    .toPromise().then(dados => resolve(dados), () => reject());
            } else {
                this.httpBase.post<T>(this.urlBase, object, this.httpOtions)
                    .toPromise().then(dados => resolve(dados), () => reject());
            }
        });
    }

    delete(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.httpBase.delete<Boolean>(this.urlBase + "/" + id, this.httpOtions)
                .toPromise()
                .then(deleted => {
                    if (deleted) resolve();
                    else reject();
                });
        });
    }

    consultId(id: number) {
        return this.httpBase.get<T>(this.urlBase + "/" + id, this.httpOtions);
    }

    consultAll() {
        return this.httpBase.get<T[]>(this.urlBase + "/all", this.httpOtions);
    }

    consultIntervalDescription(page: number, count: number, description?: string) {
        if (description && description !== '') {
            return this.httpBase.get<Pagination<T>>(this.urlBase + "/interval/" + page + "/" + count + "/" + description, this.httpOtions);
        }

        return this.httpBase.get<Pagination<T>>(this.urlBase + "/interval/" + page + "/" + count, this.httpOtions);
    }
}