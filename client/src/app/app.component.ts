import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  showLayout(): boolean {
    const hiddenRoutes = ['/login', '/register', '/regenerate-password', '/new-password'];
    return !hiddenRoutes.includes(this.router.url);
  }
}