import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormActivoComponent } from './components/formularios/form-activo/form-activo.component';
import { FormEdificioComponent } from './components/formularios/form-edificio/form-edificio.component';
import { FormLaborComponent } from './components/formularios/form-labor/form-labor.component';
import { FormOtComponent } from './components/formularios/form-ot/form-ot.component';
import { FormPisoComponent } from './components/formularios/form-piso/form-piso.component';
import { FormSectorComponent } from './components/formularios/form-sector/form-sector.component';
import { FormTareasComponent } from './components/formularios/form-tareas/form-tareas.component';
import { FormUbicacionComponent } from './components/formularios/form-ubicacion/form-ubicacion.component';
import { FormUsuariosComponent } from './components/formularios/form-usuarios/form-usuarios.component';
import { CuerpoComponent } from './components/orden-trabajo/cuerpo/cuerpo.component';
import { roleGuard } from './guards/role.guard';
import { inicioAdminComponent } from './pages/inicioAdmin/inicioAdmin.component';
import { inicioOperarioComponent } from './pages/inicioOperario/inicioOperario.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ordenTrabajo', component: CuerpoComponent, },
  { path: 'formOT', component: FormOtComponent, },
  { path: 'formActivo', component: FormActivoComponent, },
  { path: 'formEdificio', component: FormEdificioComponent, },
  { path: 'formPiso', component: FormPisoComponent, },
  { path: 'formSector', component: FormSectorComponent, },
  { path: 'formUbicacion', component: FormUbicacionComponent, },
  { path: 'formUsuarios', component: FormUsuariosComponent, },
  { path: 'formTareas', component: FormTareasComponent, },
  { path: 'formLabor', component: FormLaborComponent, },
  { path: 'inicioOperario', component: inicioOperarioComponent, canActivate: [roleGuard], data: { roles: ['operario'] } },
  { path: 'inicioAdmin', component: inicioAdminComponent, canActivate: [roleGuard], data: { roles: ['admin'] } },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
