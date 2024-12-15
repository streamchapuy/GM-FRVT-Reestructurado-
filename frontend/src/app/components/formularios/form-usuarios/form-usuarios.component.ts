import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css'],
})
export class FormUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  totalPages: number = 0;

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  volver(): void {
    this.router.navigate(['/inicioAdmin']);
  }

  get paginadoUsuarios(): Usuario[] {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.usuarios.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  obtenerUsuarios(): void {
    this.usuariosService.obtenerUsuarios().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data || [];
        this.totalPages = Math.ceil(this.usuarios.length / this.itemsPerPage);
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
        this.usuarios = [];
        this.totalPages = 0;
      }
    );
  }

  seleccionarUsuario(usuario: Usuario): void {
    console.log('Usuario seleccionado:', usuario);
  }
}
