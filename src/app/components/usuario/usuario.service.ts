import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService extends BaseService<Usuario> {

  constructor(http: HttpClient) {
    super(http, 'usuario');
  }
}