import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {NumeroOT} from '../app/interfaces/numero-ot'


@Injectable({
  providedIn: 'root'
})
export class OtService {
  private apiUrl = 'http://127.0.0.1:3307/API';


  constructor(private http: HttpClient) { }

  obtenerOt(): Observable<NumeroOT[]> {
    return this.http.get<NumeroOT[]>(`${this.apiUrl}/obtener_ordenestrabajo`);
  }
}
