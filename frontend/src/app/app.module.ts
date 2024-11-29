import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterModule } from './components/footer/footer.module';
import { FormulariosModule } from './components/formularios/formularios.module';
import { HeaderLoggedModule } from './components/header-logged/header-logged.module';
import { HeaderModule } from './components/header/header.module';


import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { TerminadasComponent } from './components/terminadas/terminadas.component';
import { HomeLoggedComponent } from './pages/home-logged/home-logged.component';
import { HomeOperarioComponent } from './pages/home-operario/home-operario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CuerpoComponent } from './components/orden-trabajo/cuerpo/cuerpo.component';
import { SelectoresComponent } from './components/orden-trabajo/selectores/selectores.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    HomeLoggedComponent,
    HomeOperarioComponent,
    PendientesComponent,
    TerminadasComponent,
    CuerpoComponent,
    SelectoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    FormulariosModule,
    HeaderModule,
    HeaderLoggedModule,
    HttpClientModule,
    FooterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
