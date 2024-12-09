import { Component } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrl: './fechas.component.css'
})
export class FechasComponent {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data.filter((usuario) => usuario.tipo_usuario === 'operario');
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
}
