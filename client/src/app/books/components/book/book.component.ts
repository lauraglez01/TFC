import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'books-components-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  @Input()
  public book!: Book;

  @Output()
  public bookTitleEventEmitter: EventEmitter<string> = new EventEmitter<string>;

  public bookDetails: Book | null = null;
  public isLoading: boolean = true;
  public selectedStatus: string = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    // Obtener el parámetro bookId de la URL
    const bookId = this.route.snapshot.paramMap.get('bookId');
    if (bookId) {
      // Buscar el libro por ID usando el servicio
      this.bookService.getBooks().subscribe((books: Book[]) => {
        this.bookDetails = books.find(book => book.id === +bookId) || null;
        this.isLoading = false; 
      });
    }
  }

  public emitBookTitle():void{
    this.bookTitleEventEmitter.emit(this.book.title);
  }

  setStatus(status: string): void {
    this.selectedStatus = status;
    console.log(`Book status set to: ${status}`);
  }
}
