import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router,
    private authService: AuthService
  ) { }

  login() {
    if (!this.email || !this.password) {
      alert('Por favor ingresa los campos de email y contraseña');
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        this.router.navigate(['/inicioAdmin']);
      },
      (error) => {
        console.error('Error en el login:', error);
        alert('Error al iniciar sesión, intente nuevamente.');
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/registro']);
  }
}
