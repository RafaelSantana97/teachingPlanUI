import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private token: string;

  constructor() { }

  setAccessToken(token: string) {
    this.token = token;
  }

  getAccessToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedin') && this.getAccessToken) {
      return true;
    }

    return false;
  }
}