import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient,
    private cookieService: CookieService
  ) { }

  register(user: any): Observable<any> {
    const token = this.cookieService.get('token');
    if (token) {
      user.token = token;
    }
    const headers = new HttpHeaders().set('Authorization', `<Bearer> ${token}`);
    return this.http.post(`${this.apiUrl}/register`, user, { headers: headers });
  }
}
