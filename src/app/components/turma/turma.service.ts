import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';
import { Turma } from './turma.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TurmaService extends BaseService<Turma> {

  constructor(http: HttpClient) {
    super(http, 'turma');
  }
}
