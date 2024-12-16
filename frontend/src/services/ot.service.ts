import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {NumeroOT} from '../app/interfaces/numero-ot'
import { environment } from '../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class OtService {

  constructor(private http: HttpClient) { }

  obtenerOt(): Observable<NumeroOT[]> {
    return this.http.get<NumeroOT[]>(`${environment.urlBase}/obtener_ordenestrabajo`);
  }
}
