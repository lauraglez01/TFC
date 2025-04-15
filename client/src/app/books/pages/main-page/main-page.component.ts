import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'books-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  
  constructor(public BookService:BookService){}

  public books: Book[] = [];
  public allBooks: Book[] = [];

  ngOnInit(): void {
    // Cargamos todos los libros al inicio
    this.BookService.getBooks().subscribe((res: Book[]) => {
      this.books = res;
      this.allBooks = res;  // Guardamos todos los libros también para cuando se reinicie el filtro
    });
  }

  public filterByCategories(event: Event): void {
    const selectedCategory = (event.target as HTMLSelectElement).value;

    // Si no se selecciona ninguna categoría, mostramos todos los libros
    if (selectedCategory === 'all' || !selectedCategory) {
      this.books = [...this.allBooks];
    } else {
      // Filtra los libros que contienen la categoría seleccionada
      this.books = this.allBooks.filter(book =>
        book.categories.some(category => category.name === selectedCategory)
      );
          }
  }
}
