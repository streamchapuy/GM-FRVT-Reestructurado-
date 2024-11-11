import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isPopupOpen = false;
  isMobile = window.innerWidth <= 768;

  constructor(private router: Router) {}

  handleSearch(term: string): void {
    console.log('Search term:', term);
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.isPopupOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;

    if (
      this.isPopupOpen &&
      !targetElement.closest('.navbar-popup') &&
      !targetElement.closest('.navbar-toggler')
    ) {
      this.isPopupOpen = false;
    }
  }
}
