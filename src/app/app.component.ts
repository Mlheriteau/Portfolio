import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  isPageOpen = false;
  animationState = 'closed';
  currentPage = '';
  isNavVisible = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.scrollContainer?.nativeElement) {
          this.scrollContainer.nativeElement.scrollTop = 0; // returns to the top with each navigation
        }
      });
  }

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
