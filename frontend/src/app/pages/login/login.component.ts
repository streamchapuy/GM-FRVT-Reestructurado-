import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login() {
    throw new Error('Method not implemented.');
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}


