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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (data: any) => {
        console.log('Datos JSON recibidos:', data);

        if (!data.data || !data.data.accessToken) {
          console.error('Token no recibido');
          alert('Error: no se recibió un token');
          return;
        }

        this.authService.setToken(data.data.accessToken);
        this.router.navigate(['/books']);
      },
      error: (error) => {
        console.error('Error en la respuesta del servidor', error);
        alert(error.error?.message || 'Error al iniciar sesión');
      }
    });
  }
}
