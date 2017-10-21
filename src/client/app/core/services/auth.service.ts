import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LoginCredentials } from '../models/login-credentials';
import { LoginResponse } from '../models/login-response';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  
  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  public setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }


  public isAuthenticated(): boolean {
    return true;
  }

  public login(credentials: LoginCredentials): Observable<Object> {
    return this.http.post(`${ environment.api }/login`, credentials) as Observable<LoginResponse>;
  }
}
