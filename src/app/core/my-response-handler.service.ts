import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { MyResponse } from './my-response.model';

@Injectable()
export class MyResponseHandlerService<T> {

  constructor() { }

  handle(response: any): MyResponse<T> {
    let retorno: MyResponse<T> = new MyResponse<T>();

    if (response instanceof Response) {
      retorno.object = response.json();
      retorno.httpStatus = response.status;
    } else {
      console.error('MyResponseService - Handler - Type de retorno inválido.');
    }

    return retorno;
  }
}