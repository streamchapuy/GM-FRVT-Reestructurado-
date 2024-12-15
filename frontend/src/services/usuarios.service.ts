import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../app/interfaces/usuario';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    private apiUrl = 'http://127.0.0.1:3307/API';

    constructor(private http: HttpClient) { }

    obtenerUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiUrl}/obtener_usuarios`);
    }
}