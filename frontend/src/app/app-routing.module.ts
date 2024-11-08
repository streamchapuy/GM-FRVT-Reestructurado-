import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormActivoComponent } from './components/formularios/form-activo/form-activo.component';
import { FormEdificioComponent } from './components/formularios/form-edificio/form-edificio.component';
import { FormPisoComponent } from './components/formularios/form-piso/form-piso.component';
import { FormSectorComponent } from './components/formularios/form-sector/form-sector.component';
import { FormUbicacionComponent } from './components/formularios/form-ubicacion/form-ubicacion.component';
import { otComponent } from './components/orden-trabajo/ot/ot.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ordenTrabajo', component: otComponent },
  { path: 'formActivo', component: FormActivoComponent },
  { path: 'formEdificio', component: FormEdificioComponent },
  { path: 'formPiso', component: FormPisoComponent },
  { path: 'formSector', component: FormSectorComponent },
  { path: 'formUbicacion', component: FormUbicacionComponent },
  
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
