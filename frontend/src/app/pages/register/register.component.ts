import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  register() {
    throw new Error('Method not implemented.');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
