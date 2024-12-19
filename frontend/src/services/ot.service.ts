import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumeroOT } from '../app/interfaces/numero-ot';
import { Ot } from '../app/interfaces/ot';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OtService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerOt(): Observable<NumeroOT[]> {
    return this.http.get<NumeroOT[]>(
      `${environment.urlBase}/obtener_ordenestrabajo`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  crearOt(data: Omit<Ot, "id_ot">): Observable<{message: string, id_ot?: number}> {
    return this.http.post<{message: string, id_ot?: number}>(
      `${environment.urlBase}/crear_ordentrabajo`,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }
}
