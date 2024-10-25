import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumeroOT } from '../app/interfaces/numero-ot';


@Injectable({
  providedIn: 'root'
})
export class NumeroOTService {
  private apiUrl = 'http://127.0.0.1:3307/API';


  constructor(private http: HttpClient) { }

  obtenerNumeroOT(): Observable<NumeroOT[]> {
    return this.http.get<NumeroOT[]>(`${this.apiUrl}/ordenestrabajo`);
  }
}
