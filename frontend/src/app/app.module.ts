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

import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { HomeLoggedComponent } from './pages/home-logged/home-logged.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    HomeLoggedComponent,
    PendientesComponent,
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
