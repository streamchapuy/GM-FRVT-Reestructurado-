import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  register(user: any): Observable<any> {
    // Enviar solo email y contrasena (confirmPassword no es necesario aquí)
    const registrationData = {
      nombre: user.nombre,
      email: user.email,
      contrasena: user.contrasena,
     
    };

    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/register`, registrationData, { headers: headers });
  }
}
