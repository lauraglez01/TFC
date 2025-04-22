import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SectionsModule } from "./sections/sections.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BooksModule,
    UserModule,
    ReviewsModule,
    AppRoutingModule,
    RouterModule,
    SectionsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
