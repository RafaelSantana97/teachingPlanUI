import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { WebServiceResponse } from './web-service-response.model';

@Injectable()
export class WebServiceResponseHandlerService<T> {

  constructor() { }

  handle(response: any): WebServiceResponse<T> {
    let retorno: WebServiceResponse<T> = new WebServiceResponse<T>();

    if (response instanceof Response) {
      retorno.object = response.json();
      retorno.httpStatus = response.status;
    } else {
      console.error('WebServiceResponseService - Handler - Tipo de retorno invalido.');
    }

    return retorno;
  }
}