import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';  

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      // Si el usuario está autenticado, puede acceder
      return true;
    }

    // Si no está autenticado, redirigir al login
    this.router.navigate(['/login']);
    return false;
  }
}
