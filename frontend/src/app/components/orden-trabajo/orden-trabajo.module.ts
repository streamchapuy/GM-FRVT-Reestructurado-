import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { OtBannerFechaComponent } from './ot-banner-fecha/ot-banner-fecha.component';
import { OtCategoriasBannerComponent } from './ot-categorias-banner/ot-categorias-banner.component';

import { OtBannerChicoComponent } from './ot-banner-chico/ot-banner-chico.component';
import { OtInfoActivoComponent } from './ot-categorias-banner/ot-info-activo/ot-info-activo.component';
import { OtInfoCodigoComponent } from './ot-categorias-banner/ot-info-codigo/ot-info-codigo.component';
import { OtInfoEdificioComponent } from './ot-categorias-banner/ot-info-edificio/ot-info-edificio.component';
import { OtInfoNComponent } from './ot-categorias-banner/ot-info-n/ot-info-n.component';
import { OtInfoPisoComponent } from './ot-categorias-banner/ot-info-piso/ot-info-piso.component';
import { OtInfoSectorComponent } from './ot-categorias-banner/ot-info-sector/ot-info-sector.component';
import { OtComentariosQrComponent } from './ot-comentarios/ot-comentarios-qr/ot-comentarios-qr.component';
import { OtComentariosComponent } from './ot-comentarios/ot-comentarios.component';

// control de elementos de Santi:
import { OtFechaImpresionComponent } from './ot-banner-fecha/ot-fecha-impresion/ot-fecha-impresion.component';
import { OtFechaRealizadaComponent } from './ot-banner-fecha/ot-fecha-realizada/ot-fecha-realizada.component';
import { OtTareaOperarioComponent } from './ot-banner-fecha/ot-tarea-operario/ot-tarea-operario.component';
import { OtTiempoComponent } from './ot-banner-fecha/ot-tiempo/ot-tiempo.component';

// control de elementos de Fede:
import { HttpClientModule } from '@angular/common/http';
import { OtBannerComponent } from './ot-banner/ot-banner.component';
import { OtLogoBannerComponent } from './ot-logo-banner/ot-logo-banner.component';
import { OtTituloBannerComponent } from './ot-titulo-banner/ot-titulo-banner.component';
import { otComponent } from './ot/ot.component';
// control de elementos de John:
import { OtBannerLaborComponent } from './ot-banner-labor/ot-banner-labor.component';
import { OtLaborComponent } from './ot-banner-labor/ot-labor/ot-labor.component';
import { OtComentariosContenedorQrComponent } from './ot-comentarios/ot-comentarios-contenedor-qr/ot-comentarios-contenedor-qr.component';
import { OtInstruccionesBannerComponent } from './ot-instrucciones-banner/ot-instrucciones-banner.component';
import { OtInstruccionesTituloComponent } from './ot-instrucciones-banner/ot-instrucciones-titulo/ot-instrucciones-titulo.component';
import { OtTareaListaComponent } from './ot-instrucciones-banner/ot-tareas-lista/ot-tareas-lista.component';

// control de elementos de Cifu:

@NgModule({
  declarations: [
    otComponent,
    OtBannerComponent,
    OtTituloBannerComponent,
    OtLogoBannerComponent,
    OtCategoriasBannerComponent,
    OtBannerLaborComponent,
    OtInstruccionesBannerComponent,
    OtBannerFechaComponent,
    OtInfoNComponent,
    OtInfoCodigoComponent,
    OtInfoActivoComponent,
    OtInfoEdificioComponent,
    OtInfoPisoComponent,
    OtInfoSectorComponent,
    OtLaborComponent,
    OtInstruccionesTituloComponent,
    OtTareaListaComponent,
    OtFechaImpresionComponent,
    OtFechaRealizadaComponent,
    OtTiempoComponent,
    OtTareaOperarioComponent,
    OtComentariosComponent,
    OtComentariosQrComponent,
    OtBannerChicoComponent,
    OtComentariosContenedorQrComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    otComponent,
    OtLogoBannerComponent,
  ]
})
export class OrdenTrabajoModule { }
