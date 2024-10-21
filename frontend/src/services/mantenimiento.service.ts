import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  private apiUrl = 'http://127.0.0.1:3307/API';


  constructor(private http: HttpClient) { }

  obtenerOt(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ot`);
  }
}
