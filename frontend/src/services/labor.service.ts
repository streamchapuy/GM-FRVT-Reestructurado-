import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Labor } from '../app/interfaces/labor';

@Injectable({
  providedIn: 'root'
})
export class LaborService {
  private apiUrl = 'http://127.0.0.1:3307/API';
  private selectedLaborId = new BehaviorSubject<number | null>(null); // Variable para almacenar id_labor seleccionado
  selectedLaborId$ = this.selectedLaborId.asObservable();

  constructor(private http: HttpClient) {}

  obtenerlabor(): Observable<Labor[]> {
    return this.http.get<Labor[]>(`${this.apiUrl}/obtener_labores`);
  }

  setSelectedLabor(id_labor: number) {
    this.selectedLaborId.next(id_labor); // Establecer id_labor seleccionado
  }

  // getSelectedLaborId(): number | null {
  //   return this.selectedLaborId; // Obtener id_labor seleccionado
  // }
}

