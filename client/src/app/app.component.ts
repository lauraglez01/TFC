import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './sections/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.authService.loadUser().subscribe({
        next: (user) => this.authService.setUserId(user.id),
        error: (err) => {
          console.error('Error loading user:', err);
          this.authService.logout();
          this.router.navigate(['/login']);
        },
      })
    }
  }

  showLayout(): boolean {
    const hiddenRoutes = ['/login', '/register', '/regenerate-password', '/new-password'];
    return !hiddenRoutes.includes(this.router.url);
  }
}