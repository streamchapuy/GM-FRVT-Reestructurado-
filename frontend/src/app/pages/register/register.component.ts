import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { IRegister } from '../../interfaces/iregister';
import { ToastrService } from 'ngx-toastr';
>>>>>>> 1f1fe813f5b81dbf7012494ff03a6afcffcce22d

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
test() {
  this.toastr.success('Hello world!', 'Toastr fun!');
console.log('test');
}
  user: IRegister = {
    nombre: '',
    email: '',
    contrasena: '',
    confirmPassword: '',
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Mostrar un toast de prueba cuando se inicialice el componente
    this.toastr.success('Bienvenido al registro', 'Información');
  }

  register() {
    // Validación básica en el frontend
    if (!this.user.email || !this.user.contrasena || !this.user.confirmPassword || !this.user.nombre) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (this.user.contrasena !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Verificar los datos que se enviarán
    console.log('Datos de usuario que se enviarán:', this.user);

    // Llamada al servicio de registro
    this.authService.register(this.user).subscribe(
      (response: IRegister) => {
        console.log('Respuesta del servidor:', response);  // Verifica la respuesta del servidor
        
          this.toastr.success('Usuario registrado correctamente', 'Éxito');
          this.goToLogin();
        
      },
      (error: any) => {
        console.error('Error en el registro:', error);
        if (error.status === 400 && error.error.message) {
          alert(`Error en el registro: ${error.error.message}`);
        } else {
          alert('Error en el registro');
        }
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
