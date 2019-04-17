import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Error } from './error.model';

@Injectable()
export class ErrorHandlerService {

  constructor() { }

  handle(errorResponse: any): Error {
    let erro: Error = new Error();
    let msgUser: string;
    let msgDesenvolvedor: string;
    let errorCode: number;

    if (typeof errorResponse === 'string') {
      erro.mensagemUser = errorResponse;
    } else if (errorResponse instanceof Response
      && errorResponse.status >= 400 && errorResponse.status <= 499) {
      let errors;
      msgUser = 'Ocorreu um erro ao processar a sua solicitação';

      try {
        errors = errorResponse.json();

        msgUser = errors[0].mensagemUser;
        msgDesenvolvedor = errors[0].mensagemDesenvolvedor;
        errorCode = errors[0].errorCode;
      } catch (e) { }

      erro.httpStatus = errorResponse.status;
      erro.mensagemUser = msgUser;
      erro.mensagemDesenvolvedor = msgDesenvolvedor;
      erro.errorCode = errorCode;

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msgUser = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);

      erro.mensagemUser = msgUser;
    }

    return erro;
  }
}