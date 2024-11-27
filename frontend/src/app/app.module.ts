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
import { OrdenTrabajoModule } from './components/orden-trabajo/orden-trabajo.module';

import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { LandingInfo1Component } from './components/landing-informacion/landing-info-1/landing-info-1.component';
import { LandingInfo2Component } from './components/landing-informacion/landing-info-2/landing-info-2.component';
import { LandingInfo3Component } from './components/landing-informacion/landing-info-3/landing-info-3.component';
import { LandingInfo4Component } from './components/landing-informacion/landing-info-4/landing-info-4.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { TerminadasComponent } from './components/terminadas/terminadas.component';
import { HomeLoggedComponent } from './pages/home-logged/home-logged.component';
import { HomeOperarioComponent } from './pages/home-operario/home-operario.component';
import { LandingPageComponent } from './pages/home/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    LandingPageComponent,
    HomeLoggedComponent,
    HomeOperarioComponent,
    PendientesComponent,
    TerminadasComponent,
    LandingInfo1Component,
    LandingInfo2Component,
    LandingInfo3Component,
    LandingInfo4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrdenTrabajoModule,
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
