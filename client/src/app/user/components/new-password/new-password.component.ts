import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'; // Usar el servicio UserService
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  standalone: false,
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {
  newPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.newPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      codigo: ['', [Validators.required]],
      nuevaPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmacionPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.newPasswordForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const { email, codigo, nuevaPassword, confirmacionPassword } = this.newPasswordForm.value;

    if (nuevaPassword !== confirmacionPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.userService.resetPassword({ email, token: codigo, password: nuevaPassword, password_confirmation: confirmacionPassword })
      .subscribe({
        next: (response) => {
          alert('Contraseña restablecida con éxito.');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          alert('Error al restablecer la contraseña. Verifica el código de seguridad.');
          console.error('Error al restablecer la contraseña:', error);
        }
      });
  }
}