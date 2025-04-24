import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-components-regenerate-password',
  standalone: false,
  templateUrl: './regenerate-password.component.html',
  styleUrl: './regenerate-password.component.css'
})
export class RegeneratePasswordComponent {
  regenerateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.regenerateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.regenerateForm.invalid) {
      alert('Por favor, ingresa un correo válido');
      return;
    }

    const email = this.regenerateForm.get('email')?.value;

    this.userService.sendRecoveryCode(email).subscribe({
      next: () => {
        alert('Código de seguridad enviado a tu correo.');
        this.router.navigate(['/new-password']);
      },
      error: (error) => {
        console.error('Error al enviar el código:', error);
        alert('Error al enviar el código de seguridad.');
      }
    });
  }
}