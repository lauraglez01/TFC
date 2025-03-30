import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.authState$.pipe(
      take(1), // Toma solo el primer valor emitido por el observable
      map((isAuthenticated) => {
        if (isAuthenticated) {
          // Si el usuario está autenticado, permite el acceso
          return true;
        }

        // Si no está autenticado, redirige a /login
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}