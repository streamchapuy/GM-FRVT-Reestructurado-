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
import { inicioAdminComponent } from './pages/inicioAdmin/inicioAdmin.component';
import { HomeOperarioComponent } from './pages/home-operario/home-operario.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { CuerpoComponent } from './components/orden-trabajo/cuerpo/cuerpo.component';
import { SelectoresComponent } from './components/orden-trabajo/selectores/selectores.component';
import { TareasComponent } from './components/orden-trabajo/tareas/tareas.component';
import { FechasComponent } from './components/orden-trabajo/fechas/fechas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    inicioAdminComponent,
    LandingPageComponent,
    HomeOperarioComponent,
    CuerpoComponent,
    SelectoresComponent,
    LandingInfo1Component,
    LandingInfo2Component,
    LandingInfo3Component,
    LandingInfo4Component,
    TareasComponent,
    FechasComponent,
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
