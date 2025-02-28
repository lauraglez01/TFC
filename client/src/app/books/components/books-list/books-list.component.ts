import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'books-components-books-list',
  standalone: false,
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {

  @Input()
  public books: Book[] = [];

  public bookSelected: string = '';

}
