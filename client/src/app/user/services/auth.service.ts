import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuthState() {
    throw new Error('Method not implemented.');
  }

  private url: string = 'http://127.0.0.1/api';
  private token: string | null = null;  

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${this.url}/login`, { email, password });
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('accessToken');
  }

  logout(): void {
    const token = this.getToken(); 
    if (!token) {
      console.error('No token found');
      return;
    }
    this.http.post('http://127.0.0.1/api/logout', {}, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    }).subscribe({
      next: () => {
        localStorage.removeItem('accessToken');  
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error during logout', err);
      }
    });    
  }
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}
