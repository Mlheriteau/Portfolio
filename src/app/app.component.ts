// Root component of the Angular application
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App {
  isPageOpen = false;
  animationState = 'closed';
  currentPage = '';
  isNavVisible = false;

  constructor(private router: Router) {}

  openPage(route: string) {
    this.currentPage = route;
    this.isPageOpen = true;
    this.animationState = 'open';
    this.router.navigate([route]);
  }

  closePage() {
    this.animationState = 'closed';
    setTimeout(() => {
      this.isPageOpen = false;
      this.currentPage = '';
    }, 600);
  }

  showNavigation() {
    this.isNavVisible = true;
  }

  hideNavigation() {
    this.isNavVisible = false;
  }
}