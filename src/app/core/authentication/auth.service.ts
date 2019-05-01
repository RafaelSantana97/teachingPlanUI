import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private token: string;

  setAccessToken(token: string) {
    this.token = token;

    localStorage.setItem('çshurros', this.token);
  }

  getAccessToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('çshurros');
    }

    return this.token;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedin') && this.getAccessToken()) {
      return true;
    }

    return false;
  }
}