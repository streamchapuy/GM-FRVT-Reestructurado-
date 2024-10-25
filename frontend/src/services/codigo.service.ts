import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodigoActivo } from '../app/interfaces/codigo-activo';

@Injectable({
  providedIn: 'root'
})
export class CodigoService {
  private apiUrl = 'http://127.0.0.1:3307/API';


  constructor(private http: HttpClient) { }

  obtenerCodigoActivo(): Observable<CodigoActivo[]> {
    return this.http.get<CodigoActivo[]>(`${this.apiUrl}/tags`);
  }
}