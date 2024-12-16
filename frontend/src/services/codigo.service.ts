import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodigoActivo } from '../app/interfaces/codigo-activo';
import { environment } from '../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class CodigoService {

  constructor(private http: HttpClient) { }

  obtenerCodigoActivo(): Observable<CodigoActivo[]> {
    return this.http.get<CodigoActivo[]>(`${environment.urlBase}/obtener_codigos`);
  }
}