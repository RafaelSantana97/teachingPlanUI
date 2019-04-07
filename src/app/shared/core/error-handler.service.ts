import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Erro } from './error.model';


@Injectable()
export class ErrorHandlerService {

  constructor() { }

  handle(errorResponse: any): Erro {
    let erro: Erro = new Erro();
    let msgUsuario: string;
    let msgDesenvolvedor: string;
    let errorCode: number;

    if (typeof errorResponse === 'string') {
      erro.mensagemUsuario = errorResponse;
    } else if (errorResponse instanceof Response
      && errorResponse.status >= 400 && errorResponse.status <= 499) {
      let errors;
      msgUsuario = 'Ocorreu um erro ao processar a sua solicitação';

      try {
        errors = errorResponse.json();

        msgUsuario = errors[0].mensagemUsuario;
        msgDesenvolvedor = errors[0].mensagemDesenvolvedor;
        errorCode = errors[0].errorCode;
      } catch (e) { }

      erro.httpStatus = errorResponse.status;
      erro.mensagemUsuario = msgUsuario;
      erro.mensagemDesenvolvedor = msgDesenvolvedor;
      erro.errorCode = errorCode;

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msgUsuario = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);

      erro.mensagemUsuario = msgUsuario;
    }

    return erro;
  }
}