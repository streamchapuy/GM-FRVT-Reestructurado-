import { Component, OnInit } from '@angular/core';
import { CodigoService } from '../../../../services/codigo.service';
import { ActivoService } from '../../../../services/activo.service';
import { EdificioService } from '../../../../services/edificio.service';
import { SectorService } from '../../../../services/sector.service';
import { UbicacionService } from '../../../../services/ubicacion.service';
import { FiltrosService } from '../../../../services/filtros.service';
import { PisoService } from '../../../../services/piso.service';
import { LaborService } from '../../../../services/labor.service';
import { CodigoActivo } from '../../../interfaces/codigo-activo';


@Component({
  selector: 'app-selectores',
  templateUrl: './selectores.component.html',
  styleUrls: ['./selectores.component.css']
})
export class SelectoresComponent implements OnInit {
orden = {
  códigoÚnico: '',
  activo: '',
  piso: '',
  edificio: '',
  sector: '',
  ubicacion: ''
}

CodigoActivo: CodigoActivo[] = [];
codigoActivoOriginal: CodigoActivo[] = [];

activos: string[] = [];
edificios: string[] = [];
sectores: string[] = [];
pisos: string[] = [];
ubicaciones: string[] = [];
labor: string[] = [];

selectorcodigo: number | null = null;
selectorActivo: string  | null = null;

constructor
(
  private codigoService: CodigoService,
  private activoService: ActivoService,
  private edificioService: EdificioService,
  private pisoService: PisoService,
  private sectorService: SectorService,
  private ubicacionService:UbicacionService,
  private filtroService: FiltrosService,
  private laborService: LaborService
) {}
 
ngOnInit(): void { 
  this.loadOts();   
  this.loadFilters();
}

loadOts() {
  this.codigoService.obtenerCodigoActivo().subscribe({
    next: (data: CodigoActivo[]) => {
      this.CodigoActivo = data;
      this.codigoActivoOriginal = [...data];
      console.log('codigo activos cargados: ', this.CodigoActivo);

      this.activos = [...new Set(data.map((item) => item.abreviatura_activo))];
    },
    error: (err) => {
      console.error('Error al cargar los códigos activos:', err);
    }
  });
}

loadFilters(tag = 0) {
  this.filtroService.filtroPorTag({ id_tag: tag }).subscribe({
    next: (data) => {
      this.CodigoActivo = data;
      this.codigoActivoOriginal = [...data]; 
    },
    error: (error) => {
      console.error('Error al filtrar los tags:', error);
    }
  });
}

ActualizarCampos(){
  if(this.selectorcodigo){
    const selectedCodigo = this.CodigoActivo.find(codigo => codigo.activo_id_formateado === this.selectorcodigo);
    
    if(selectedCodigo){
     
      this.activoService.obtenerActivoPorId(selectedCodigo.activo_id_formateado).subscribe({
        next: (activo) => {
          this.activoService.setSelectedActivo(activo.id_activo);
          console.log('Activo seleccionado:', activo)
          this.orden.activo = activo.nombre;
          this.activos = [activo.nombre]
        },
        error: (err) => {
          console.error('Error al obtener el nombre del activo:', err);
        }
      });

      this.edificioService.obtenerEdificioPorId(selectedCodigo.edificio_id_formateado).subscribe({
        next: (edificio)=>{
          console.log('Edificio seleccionado:', edificio);
          this.orden.edificio = edificio.nombre;
          this.edificios = [edificio.nombre];
        },
        error: (err)=>{
          console.error('Error al obtener el nombre del edificio: ', err)
        }
      });

      this.sectorService.obtenerSectorPorId(selectedCodigo.sector_id_formateado).subscribe({
        next: (sector)=>{
          console.log('Sector seleccionado: ', sector);
          this.orden.sector = sector.nombre;
          this.sectores = [sector.nombre];
        },
        error: (err)=>{
          console.error('Error al obtener el nombre del sector: ', err)
        }
      })

      this.pisoService.obtenerPisoPorId(selectedCodigo.piso_id_formateado).subscribe({
        next: (piso)=>{
          console.log('Piso Seleccionado: ', piso);
          this.orden.piso = piso.nombre;
          this.pisos = [piso.nombre];
        }
      })

      this.ubicacionService.obtenerUbicacionPorId(selectedCodigo.ubicacion_id_formateado).subscribe({
        next: (ubicacion)=>{
          console.log('Ubicacion seleccionada: ', ubicacion);
          this.orden.ubicacion = ubicacion.nombre;
          this.ubicaciones = [ubicacion.nombre];
        }
      })    
    }
    
  }
}
CambiarActivo(){
  if(this.selectorActivo){
    this.CodigoActivo =[...this.codigoActivoOriginal]
  } else {
    this.CodigoActivo = this.codigoActivoOriginal.filter(
      (codigo)=>{ codigo.abreviatura_activo === this.selectorActivo});
  }
  this.selectorcodigo = null;
  this.orden.códigoÚnico = '';
}
}
