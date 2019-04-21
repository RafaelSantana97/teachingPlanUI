import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pagination } from '../../core/my-response.model';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseModel } from './base-model';

export class BaseService<T> {

    private _urlBase: string = "";
    public get urlBase(): string { return this._urlBase };

    private _httpOtions: { headers: HttpHeaders };
    public get httpOtions() { return this._httpOtions };

    protected httpBase: HttpClient;
    protected spinner: NgxSpinnerService;

    constructor(
        private injector: Injector,
        url: string
    ) {
        this.httpBase = this.injector.get(HttpClient);
        this.spinner = this.injector.get(NgxSpinnerService);

        this._urlBase = environment.urlBase + url;
        let token = localStorage.getItem('token');
        this._httpOtions = { headers: new HttpHeaders({ 'Authorization': token, 'Content-Type': 'application/json' }) };
    }

    save(object: BaseModel): Promise<T> {
        this.spinner.show();

        if (object.id) {
            let observable = this.httpBase.put<T>(this.urlBase, object, this.httpOtions);
            return this.getHandledPromise(observable);
        } else {
            let observable = this.httpBase.post<T>(this.urlBase, object, this.httpOtions);
            return this.getHandledPromise(observable);
        }
    }

    delete(id: number): Promise<void> {
        this.spinner.show();

        let observable = this.httpBase.delete<Boolean>(this.urlBase + "/" + id, this.httpOtions);
        return this.getHandledPromise(observable);
    }

    consultId(id: number): Promise<T> {
        this.spinner.show();

        let observable = this.httpBase.get<T>(this.urlBase + "/" + id, this.httpOtions);
        return this.getHandledPromise(observable);
    }

    consultAll(): Promise<T[]> {
        this.spinner.show();

        let observable = this.httpBase.get<T[]>(this.urlBase + "/all", this.httpOtions);
        return this.getHandledPromise(observable);
    }

    consultIntervalDescription(page: number, count: number, description?: string): Promise<Pagination<T>> {
        this.spinner.show();

        if (description && description !== '') {
            let observable = this.httpBase.get<Pagination<T>>(this.urlBase + "/interval/" + page + "/" + count + "/" + description, this.httpOtions);
            return this.getHandledPromise(observable);
        }

        let observable = this.httpBase.get<Pagination<T>>(this.urlBase + "/interval/" + page + "/" + count, this.httpOtions);
        return this.getHandledPromise(observable);
    }

    protected getHandledPromise(promise: Observable<any>): Promise<any> {
        return new Promise((resolve, reject) => {
            promise.toPromise()
                .then(object => {
                    this.spinner.hide();
                    if (object) resolve(object);
                    else reject();
                })
                .catch(() => {
                    this.spinner.hide();
                    reject();
                });
        });
    }
}