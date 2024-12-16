import { HttpClientModule } from '@angular/common/http';
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
import { LandingInfo1Component } from './components/landing-informacion/landing-info-1/landing-info-1.component';
import { LandingInfo2Component } from './components/landing-informacion/landing-info-2/landing-info-2.component';
import { LandingInfo3Component } from './components/landing-informacion/landing-info-3/landing-info-3.component';
import { LandingInfo4Component } from './components/landing-informacion/landing-info-4/landing-info-4.component';
import { CuerpoComponent } from './components/orden-trabajo/cuerpo/cuerpo.component';
import { FechasComponent } from './components/orden-trabajo/fechas/fechas.component';
import { QRComponent } from './components/orden-trabajo/qr/qr.component';
import { SelectoresComponent } from './components/orden-trabajo/selectores/selectores.component';
import { TareasComponent } from './components/orden-trabajo/tareas/tareas.component';
import { inicioAdminComponent } from './pages/inicioAdmin/inicioAdmin.component';
import { inicioOperarioComponent } from './pages/inicioOperario/inicioOperario.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NotFoundComponent,
    inicioAdminComponent,
    LandingPageComponent,
    inicioOperarioComponent,
    CuerpoComponent,
    SelectoresComponent,
    LandingInfo1Component,
    LandingInfo2Component,
    LandingInfo3Component,
    LandingInfo4Component,
    TareasComponent,
    FechasComponent,
    QRComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private cookieService: CookieService) {}
}
