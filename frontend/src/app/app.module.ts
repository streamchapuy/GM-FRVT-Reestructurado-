import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterModule } from './components/footer/footer.module';
import { FormulariosModule } from './components/formularios/formularios.module';
import { HeaderLoggedModule } from './components/header-logged/header-logged.module';
import { HeaderModule } from './components/header/header.module';
import { LandingModule } from './components/landing-informacion/landing.module';
import { OrdenTrabajoModule } from './components/orden-trabajo/orden-trabajo.module';

import { manejoErroresInterceptor } from './interceptors/manejoDeErrores.interceptor';
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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdenTrabajoModule,
    LandingModule,
    FormsModule,
    FormulariosModule,
    HeaderModule,
    HeaderLoggedModule,
    HttpClientModule,
    FooterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CookieService, provideHttpClient(withInterceptors([manejoErroresInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
