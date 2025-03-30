import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../sections/services/auth.service';
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
    const rememberedEmail = localStorage.getItem('rememberedEmail') || '';
    const rememberMe = !!rememberedEmail;
  
    this.loginForm = this.fb.group({
      email: [rememberedEmail, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [rememberMe],
    });
  
    // Redirige a /home si el usuario ya está autenticado
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }
  
  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }
  
    const { email, password, rememberMe } = this.loginForm.value;
  
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email); // Guarda el email si "Remember me" está seleccionado
    } else {
      localStorage.removeItem('rememberedEmail'); // Elimina el email si "Remember me" no está seleccionado
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
