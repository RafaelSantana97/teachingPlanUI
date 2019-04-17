import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/classes-padrao/base-service';

@Injectable()
export class AuthService {

  token: string;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  getAccessToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedin')) {
      return true;
    }

    return false;
  }
}