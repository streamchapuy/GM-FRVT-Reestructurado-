import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodigoActivo } from '../app/interfaces/codigo-activo';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CodigoService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerCodigoActivo(): Observable<CodigoActivo[]> {
    return this.http.get<CodigoActivo[]>(
      `${environment.urlBase}/obtener_codigos`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }
}
