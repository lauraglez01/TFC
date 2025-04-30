import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { BooksModule } from '../books/books.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoriesComponent } from './components/stories/stories.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MainPageComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    StoriesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BooksModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SectionsModule { }
