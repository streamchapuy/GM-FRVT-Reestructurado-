// src/app/components/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = {
      email: this.email,
      contraseña_hash: this.password // Enviar el campo `contraseña_hash` como espera el backend
    };

    this.authService.register(user).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']); // Redirige después del registro
      },
      error: (error) => {
        console.error('Error en el registro', error);
        this.errorMessage = 'Ocurrió un problema durante el registro';
      }
    });
  }
}
