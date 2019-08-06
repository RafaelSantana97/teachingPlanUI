import { filter, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

import { BaseModel } from './base-model';
import { environment } from 'src/environments/environment';
import { Pagination } from '../../core/my-response.model';

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
    this._httpOtions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }

  public save(object: BaseModel): Observable<T> {
    if (object.id) {
      const observable = this.httpBase.put<T>(this.urlBase, object, this.httpOtions);
      return this.getHandledObservable(observable);
    } else {
      const observable = this.httpBase.post<T>(this.urlBase, object, this.httpOtions);
      return this.getHandledObservable(observable);
    }
  }

  public delete(id: number): Observable<void> {
    const observable = this.httpBase.delete<Boolean>(this.urlBase + "/" + id, this.httpOtions);
    return this.getHandledObservable(observable);
  }

  public consultId(id: number): Observable<T> {
    const observable = this.httpBase.get<T>(this.urlBase + "/" + id, this.httpOtions);
    return this.getHandledObservable(observable);
  }

  public consultAll(): Observable<T[]> {
    const observable = this.httpBase.get<T[]>(this.urlBase + "/all", this.httpOtions);
    return this.getHandledObservable(observable);
  }

  public consultIntervalDescription(page: number, count: number, description?: string): Observable<Pagination<T>> {
    if (description && description.trim() !== "") {
      const observable = this.httpBase.get<Pagination<T>>(this.urlBase + "/interval/" + page + "/" + count + "/" + description.trim(), this.httpOtions);
      return this.getHandledObservable(observable);
    }

    const observable = this.httpBase.get<Pagination<T>>(this.urlBase + "/interval/" + page + "/" + count, this.httpOtions);
    return this.getHandledObservable(observable);
  }

  protected getHandledObservable(observable: Observable<any>): Observable<any> {
    const timeOut = setTimeout(() => {
      this.spinner.show();
    }, 50);

    return observable.pipe(
      tap(object => {
        clearTimeout(timeOut);
        return object;
      }),
      filter(object => {
        if (object) return object;
      }),
    );
  }
}