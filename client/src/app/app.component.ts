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
    // Oculta el layout (header y navbar) en la página de login
    return this.router.url !== '/login';
  }
}