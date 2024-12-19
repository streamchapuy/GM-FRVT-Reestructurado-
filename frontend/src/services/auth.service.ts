import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  register(user: any): Observable<any> {
    return this.http.post(`${environment.urlBase}/register`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.urlBase}/login`, { email, password })
      .pipe(
        map((response: any) => {
          const token = response?.token;
          const tipo_usuario = response?.tipo_usuario;
          if (token) {
            this.setToken(token);
            this.setUserRole(tipo_usuario);
          }
          return response;
        })
      );
  }
  setToken(token: string): void {
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);
    this.cookieService.set('token', token, {
      expires: expiryDate,
      path: '/',
      sameSite: 'Lax',
    });
  }
  getToken(): string {
    return this.cookieService.get('token');
  }

  setUserRole(role: string): void {
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);
    this.cookieService.set('userRole', role, {
      expires: expiryDate,
      path: '/',
      sameSite: 'Lax',
    });
  }

  getUserRole(): string {
    return this.cookieService.get('userRole');
  }

  logout(): void {
    this.cookieService.delete('token', '/');
    this.cookieService.delete('userRole', '/');
  }
}
