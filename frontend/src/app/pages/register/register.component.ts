import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { response } from 'express';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private router: Router, 
    private authService: AuthService,
  private cookieService: CookieService) { }

  register() {
    
    if (this.user.password !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const token = this.cookieService.get('token');
    
    if(token){
      console.log('token encontrado: ', token)
      this.router.navigate(['/home']);
    } else {
      console.log('token no encontrado')
    }

    this.authService.register(this.user).subscribe(
      response => {
        if (response && response.token){
          this.cookieService.set('token', response.token, 1, '/');
          alert('Registro Exitoso')
        }
        this.goToLogin();
      },
      Error => {
        console.error(Error);
        alert('Error en el registro')
      }
    )
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
