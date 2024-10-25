import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../../../../services/sector.service';
import { Sector } from '../../../../interfaces/sector';

@Component({
  selector: 'app-ot-info-sector',
  templateUrl: './ot-info-sector.component.html',
  styleUrl: './ot-info-sector.component.css'
})
export class OtInfoSectorComponent implements OnInit{
  sectores: Sector[] = [];
  selectorSector: number | null = null;
  constructor(private sectorService: SectorService) { }

  ngOnInit(): void {
    this.loadSectores();
  }
  loadSectores() {
    this.sectorService.obtenerSector().subscribe({
      next: (data: Sector[]) => {
        this.sectores = data;
        console.log(this.sectores);
      },
      error: (err) => {
        console.error('Error al cargar los sectores:', err);
      }
    });
  }
}