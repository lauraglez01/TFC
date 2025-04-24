import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserLogin, UserRegister } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://127.0.0.1:80/api';

  constructor(private http:HttpClient) { }

  register(userData: UserRegister): Observable<UserRegister> {
    return this.http.post<UserRegister>(`${this.url}/register`, userData);
  }

  login(user: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${this.url}/login`, user); 
  }

  sendRecoveryCode(email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('http://127.0.0.1/api/regenerate/code', { email })
        .pipe(
            catchError((error) => {
                console.error('Error en el backend:', error);
                return throwError(() => new Error('Error al enviar el código.'));
            })
        );
}

  
  resetPassword(data: { email: string, token: string, password: string, password_confirmation: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.url}/regenerate/password`, data);
  }
  
}
