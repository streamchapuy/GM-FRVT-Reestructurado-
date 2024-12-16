import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  handleSearch(term: string): void {
    console.log('Search term:', term);
  }
  constructor(private router: Router){

  }

  register(){
    this.router.navigate(['/registro']);
  }

  login(){
    this.router.navigate(['/login']);
  }

}

