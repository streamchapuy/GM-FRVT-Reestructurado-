import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';



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
    if (!this.email || !this.password) {  // Verifica que ambos campos sean no nulos
      alert('Por favor ingresa los campos de email y contraseña');
      return;
    }
  
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        // Redirige a otra página si el login es exitoso
        this.router.navigate(['/home-logged']);
      },
      (error) => {
        console.error('Error en el login:', error);
        alert('Error al iniciar sesión');
      }
    );
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
