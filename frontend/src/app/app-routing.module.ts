import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormActivoComponent } from './components/formularios/form-activo/form-activo.component';
import { FormEdificioComponent } from './components/formularios/form-edificio/form-edificio.component';
import { FormOtComponent } from './components/formularios/form-ot/form-ot.component';
import { FormPisoComponent } from './components/formularios/form-piso/form-piso.component';
import { FormSectorComponent } from './components/formularios/form-sector/form-sector.component';
import { FormTareasComponent } from './components/formularios/form-tareas/form-tareas.component';
import { FormUbicacionComponent } from './components/formularios/form-ubicacion/form-ubicacion.component';
import { FormUsuariosComponent } from './components/formularios/form-usuarios/form-usuarios.component';
import { otComponent } from './components/orden-trabajo/ot/ot.component';
import { roleGuard } from './guards/role.guard';
import { HomeLoggedComponent } from './pages/home-logged/home-logged.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-logged', component: HomeLoggedComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ordenTrabajo', component: otComponent, canActivate: [roleGuard] },
  { path: 'formOT', component: FormOtComponent, canActivate: [roleGuard] },
  { path: 'formActivo', component: FormActivoComponent, canActivate: [roleGuard] },
  { path: 'formEdificio', component: FormEdificioComponent, canActivate: [roleGuard] },
  { path: 'formPiso', component: FormPisoComponent, canActivate: [roleGuard] },
  { path: 'formSector', component: FormSectorComponent, canActivate: [roleGuard] },
  { path: 'formUbicacion', component: FormUbicacionComponent, canActivate: [roleGuard] },
  { path: 'formUsuarios', component: FormUsuariosComponent, canActivate: [roleGuard] },
  { path: 'formTareas', component: FormTareasComponent, canActivate: [roleGuard] },
  { path: '404', component: NotFoundComponent },
  
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
