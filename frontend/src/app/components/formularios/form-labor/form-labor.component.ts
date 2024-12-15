import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaborService } from '../../../../services/labor.service';
import { Labor } from '../../../interfaces/labor';

@Component({
  selector: 'app-form-labor',
  templateUrl: './form-labor.component.html',
  styleUrls: ['./form-labor.component.css']
})
export class FormLaborComponent implements OnInit {
  labor: Labor = {
    id_labor: 0,
    descripcion: ''
  };
  labores: Labor[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 5;
  Math: any = Math;

  constructor(private laborService: LaborService, private router: Router) { }

  ngOnInit() {
    this.obtenerLabores();
  }

  volver() {
    this.router.navigate(['/inicioAdmin']);
  }

  get paginadoLabores() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.labores.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.labores.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  obtenerLabores() {
    this.laborService.obtenerLabores().subscribe({
      next: (data: Labor[]) => {
        console.log(data);
        this.labores = data;
      },
      error: (err) => console.error('Error al obtener labores:', err)
    });
  }

  seleccionarLabor(labor: Labor) {
    this.labor = { ...labor };
  }

  crear() {
    this.laborService.crearLabor(this.labor).subscribe({
      next: (nuevoLabor) => {
        this.obtenerLabores();
        this.labores.push(nuevoLabor);
        this.limpiarFormulario();
      },
      error: (err) => console.error('Error al crear labor:', err)
    });
  }

  editar() {
    if (this.labor.id_labor > 0) {  // Solo editar si existe un id
      this.laborService.editarLabor(this.labor.id_labor, this.labor).subscribe({
        next: () => {
          this.obtenerLabores();
          this.limpiarFormulario();
        },
        error: (err) => console.error('Error al editar labor:', err)
      });
    }
  }

  eliminar() {
    if (this.labor.id_labor) {
      this.laborService.eliminarLabor(this.labor.id_labor).subscribe({
        next: () => {
          this.obtenerLabores();
          this.limpiarFormulario();
        },
        error: (err) => console.error('Error al eliminar labor:', err)
      });
    }
  }

  limpiarFormulario() {
    this.labor = {
      id_labor: 0,
      descripcion: ''
    };
  }
}
