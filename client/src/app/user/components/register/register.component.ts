import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserRegister } from '../../interfaces/user.interface';

@Component({
  selector: 'user-components-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user: UserRegister = this.registerForm.value;

      this.UserService.register(user).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          alert(error.error.message || 'Hubo un error al registrar el usuario');
        }
      });
    }
  }
}
