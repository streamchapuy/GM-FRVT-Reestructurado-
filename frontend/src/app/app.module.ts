import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { NavegacionComponent } from './components/header/navegacion/navegacion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { FormulariosModule } from './components/formularios/formularios.module';
import { OrdenTrabajoModule } from './components/orden-trabajo/orden-trabajo.module';
import { AddEditEdificioComponent } from './components/add-edit-edificio/add-edit-edificio.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    NavegacionComponent,
    HomeComponent,
    LogoComponent,
    AddEditEdificioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrdenTrabajoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
