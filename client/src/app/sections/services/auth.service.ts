import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private url: string = 'http://127.0.0.1/api';
  private token: string | null = localStorage.getItem('accessToken');
  private authState = new BehaviorSubject<boolean>(this.isAuthenticated());

  public authState$ = this.authState.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${this.url}/login`, { email, password });
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('accessToken', token);
    this.authState.next(true); 
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('accessToken');
  }

  logout(): void {
    this.isLoadingSubject.next(true);
  
    this.http.post(`${this.url}/logout`, {}, { headers: { Authorization: `Bearer ${this.getToken()}` } })
      .subscribe({
        next: () => this.clearSession(),
        error: (err) => {
          console.error('Error during logout', err);
          this.clearSession();
        }
      });
  }
  
  private clearSession(): void {
    setTimeout(() => {
      localStorage.removeItem('accessToken');
      this.token = null;
      this.authState.next(false); 
      this.isLoadingSubject.next(false);
      this.router.navigate(['/home']); // Redirige a /home después de hacer logout
    }, 50); 
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}