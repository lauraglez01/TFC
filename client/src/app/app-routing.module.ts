import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { RegeneratePasswordComponent } from './user/components/regenerate-password/regenerate-password.component';
import { MainPageComponent as UserMainPage } from './user/pages/main-page/main-page.component';

import { MainPageComponent as BooksMainPage} from './books/pages/main-page/main-page.component';
import { BooksListComponent } from './books/components/books-list/books-list.component';
import { BookComponent } from './books/components/book/book.component';

import { MainPageComponent as SectionsMainPage } from './sections/pages/main-page/main-page.component';
import { NavbarComponent } from './sections/components/navbar/navbar.component';
import { HomeComponent } from './sections/components/home/home.component';
import { DashboardComponent } from './sections/components/dashboard/dashboard.component';
import { AuthGuard as SectionsGuard } from './sections/services/auth.guard';

import { MainPageComponent as ReviewsMainPage } from './reviews/pages/main-page/main-page.component';
import { NewPasswordComponent } from './user/components/new-password/new-password.component';
import { ReviewFormComponent } from './reviews/components/review-form/review-form.component';

import { StoriesComponent } from './sections/components/stories/stories.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'regenerate-password', component: RegeneratePasswordComponent },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book/:bookId', component: BookComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [SectionsGuard] },
  { path: 'book/:bookId/review', canActivate: [SectionsGuard], component: ReviewFormComponent },
  { path: 'stories', component: StoriesComponent, canActivate: [SectionsGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige a /home por defecto
  { path: '**', redirectTo: 'home' }, // Redirige a /home si la ruta no existe
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
