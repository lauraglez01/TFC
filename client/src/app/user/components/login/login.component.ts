import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user-components-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [localStorage.getItem('rememberedEmail') || '', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [localStorage.getItem('rememberedEmail') ? true : false] 
    });
  }
  
  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }
  
    const { email, password, rememberMe } = this.loginForm.value;
  
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email); 
    } else {
      localStorage.removeItem('rememberedEmail'); 
    }
  
    this.authService.login(email, password).subscribe({
      next: (data: any) => {
        if (!data.data || !data.data.accessToken) {
          alert('Error: no se recibió un token');
          return;
        }
  
        this.authService.setToken(data.data.accessToken);
        this.router.navigate(['/books']);
      },
      error: (error) => {
        alert(error.error?.message || 'Error al iniciar sesión');
      }
    });
  }  
}
