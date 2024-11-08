import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  // Método para registrar al usuario
  register(user: { email: string, contraseña_hash: string }): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Asegura que se envíen los datos como JSON
    return this.http.post(`${this.apiUrl}/register`, user, { headers });
  }

  // Método de inicio de sesión del usuario
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, contraseña_hash: password }).pipe(
      map((response: any) => {
        const token = response.user?.token;
        if (token) {
          this.setToken(token); // Guarda el token en las cookies
        }
        return response;
      })
    );
  }

  // Método para almacenar el token en una cookie
  setToken(token: string): void {
    this.cookieService.set('token', token, { path: '/', secure: true, sameSite: 'Strict' });
  }

  // Método para obtener el token de las cookies
  getToken(): string {
    return this.cookieService.get('token');
  }

  // Método para eliminar el token de las cookies (cierre de sesión)
  logout(): void {
    this.cookieService.delete('token', '/');
  }
}
