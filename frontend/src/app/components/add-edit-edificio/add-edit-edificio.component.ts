import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioService } from '../../../services/edificio.service';
import { Edificio } from '../../interfaces/edificio';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-edit-edificio',
  templateUrl: './add-edit-edificio.component.html',
  styleUrl: './add-edit-edificio.component.css'
})
export class AddEditEdificioComponent implements OnInit {

  form: FormGroup;
  id!: number;
  operacion: string = 'Agregar';
  constructor(
    private fb: FormBuilder,
    private edificioService: EdificioService,
    private router: Router,
    private toastr: ToastrService,
    private aroute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    const idParam = this.aroute.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;
    console.log('ID capturado:', this.id);

    if (this.id && !isNaN(this.id)) {
      this.operacion = 'Editar  ';
      this.getEdificio(this.id);
    } else {
      console.error('ID no válido:', this.id);
    }

    this.getEdificio(this.id);
    this.addEdificio();

  }

  getEdificio(id: number) {
    this.edificioService.obtenerEdificioPorId(id).subscribe((data: Edificio) => {
      console.log(data);
      this.form.setValue({
        name: data.nombre,
        description: data.calle       
      });
    });
  }
  
  addEdificio() {
    const edificio: Edificio = {
      id_edificio: this.id ?? 0,     
      nombre: this.form.value.name,
      calle: this.form.value.description,
      
    }

    if(this.id !== 0){
      edificio.id_edificio = this.id;
      this.edificioService.actualizarEdificio(this.id, edificio).subscribe(() => {
        this.toastr.info(`El producto ${edificio.nombre} fue actualizado con éxito`, 'Producto actualizado');
        this.router.navigate(['/']);
      });
    } else {
      this.edificioService.guardarEdificio(edificio.id_edificio, edificio).subscribe(() => {
        this.toastr.success(`El producto ${edificio.nombre} fue agregado con éxito`, 'Producto agregado');
        this.router.navigate(['/']);
      });
    }
  }

}
    


