import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}

