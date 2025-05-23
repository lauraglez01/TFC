import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    BookComponent,
    BooksListComponent,
    MainPageComponent
  ],
  providers: [
    provideHttpClient()
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class BooksModule { }
