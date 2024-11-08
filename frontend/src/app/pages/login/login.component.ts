import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
  errorMessage: string | undefined;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  login() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        response => {
          if (response.user?.token) {
            this.authService.setToken(response.user.token);
            this.toastr.success('Inicio de sesión exitoso');
            this.router.navigate(['/home']);
          } else {
            this.toastr.error('Error en el inicio de sesión: Token no encontrado');
          }
        },
        error => {
          if (error.status === 401) {
            this.toastr.error('Email o contraseña incorrectos');
          } else {
            this.toastr.error('Error en el servidor, intente nuevamente');
          }
          console.error('Error en el inicio de sesión', error);
        }
      );
    } else {
      this.toastr.warning('Por favor completa los campos');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
