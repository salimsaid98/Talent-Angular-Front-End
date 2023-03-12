import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly loginUrl = 'http://127.0.0.1:8000/api/api/login/';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }) {
    return this.http.post<{ token: string,user:string }>(this.loginUrl, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', response.user);
        })
      );
  }
}
