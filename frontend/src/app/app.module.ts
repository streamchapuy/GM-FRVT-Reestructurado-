import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { FooterModule } from './components/footer/footer.module';
import { FormulariosModule } from './components/formularios/formularios.module';
import { HeaderModule } from './components/header/header.module';
import { OrdenTrabajoModule } from './components/orden-trabajo/orden-trabajo.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { ɵBrowserAnimationBuilder } from '@angular/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    OrdenTrabajoModule,
    FormulariosModule,
    HeaderModule,
    FooterModule,
    ToastrModule.forRoot()
],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
