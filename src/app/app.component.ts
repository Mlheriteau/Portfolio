// src/app/app.ts
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('pageFlip', [
      state('closed', style({
        transform: 'rotateY(-90deg)',
        transformOrigin: 'left center'
      })),
      state('open', style({
        transform: 'rotateY(0deg)',
        transformOrigin: 'left center'
      })),
      transition('closed => open', [
        animate('0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition('open => closed', [
        animate('0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ])
    ])
  ]
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