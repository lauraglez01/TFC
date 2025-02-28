import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/components/login/login.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { RegisterComponent } from './user/components/register/register.component';
import { RegeneratePasswordComponent } from './user/components/regenerate-password/regenerate-password.component';
import { MainPageComponent as UserMainPage } from './user/pages/main-page/main-page.component';

import { MainPageComponent as BooksMainPage} from './books/pages/main-page/main-page.component';
import { BooksListComponent } from './books/components/books-list/books-list.component';
import { BookComponent } from './books/components/book/book.component';

import { MainPageComponent as ReviewsMainPage } from './reviews/pages/main-page/main-page.component';
import { ReviewsListComponent } from './reviews/components/reviews-list/reviews-list.component';
import { ReviewComponent } from './reviews/components/review/review.component';
import { NewPasswordComponent } from './user/components/new-password/new-password.component';
import { AuthGuard } from './user/services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'regenerate-password', component: RegeneratePasswordComponent },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'books', component: BooksMainPage, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
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
