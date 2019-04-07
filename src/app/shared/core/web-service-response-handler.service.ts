import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { WebServiceResponse } from './web-service-response.model';

@Injectable()
export class WebServiceResponseHandlerService {

  constructor() { }

  handle(response: any): WebServiceResponse {
    let retorno: WebServiceResponse = new WebServiceResponse();

    if (response instanceof Response) {
      retorno.object = response.json();
      retorno.httpStatus = response.status;
    } else {
      console.error('WebServiceResponseService - Handler - Tipo de retorno invalido.');
    }

    return retorno;
  }
}