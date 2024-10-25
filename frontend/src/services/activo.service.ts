import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activo } from '../app/interfaces/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {
  private apiUrl = 'http://127.0.0.1:3307/API';


  constructor(private http: HttpClient) { }

  obtenerActivo(): Observable<Activo[]> {
    return this.http.get<Activo[]>(`${this.apiUrl}/activos`);
  }
}