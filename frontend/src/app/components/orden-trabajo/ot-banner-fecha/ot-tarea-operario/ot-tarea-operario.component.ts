import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../../services/usuarios.service';
import { Usuario } from '../../../../interfaces/usuario';

@Component({
  selector: 'app-ot-tarea-operario',
  templateUrl: './ot-tarea-operario.component.html',
  styleUrls: ['./ot-tarea-operario.component.css']
})
export class OtTareaOperarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  selectorOperario: number | null = null;
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data;
        console.log(this.usuarios);
      },
      error: (err) => {
        console.error('Error al cargar los usuarios:', err);
      }
    });
  }
}
