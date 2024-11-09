import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormulariosModule } from './components/formularios/formularios.module';
import { FooterModule } from './components/header/footer/footer.module';
import { OrdenTrabajoModule } from './components/orden-trabajo/orden-trabajo.module';

import { LogoComponent } from './components/header/logo/logo.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { NavegacionComponent } from './components/header/navegacion/navegacion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    NavegacionComponent,
    HomeComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    FormsModule,
    OrdenTrabajoModule,
    FormulariosModule,
    FooterModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
