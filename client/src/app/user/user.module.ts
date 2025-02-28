import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { provideHttpClient } from '@angular/common/http';
import { RegeneratePasswordComponent } from './components/regenerate-password/regenerate-password.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPasswordComponent } from './components/new-password/new-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserNavbarComponent,
    MainPageComponent,
    RegeneratePasswordComponent,
    NewPasswordComponent
  ],
  providers: [
    provideHttpClient()
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    MainPageComponent,
    UserNavbarComponent
  ]
})
export class UserModule { }
