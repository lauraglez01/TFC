import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { AuthService } from '../../../sections/services/auth.service';
import { Router } from '@angular/router';

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
  public isAuthenticated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  
    const bookId = this.route.snapshot.paramMap.get('bookId');
  
    if (bookId) {
      this.bookService.getBooks().subscribe((books: Book[]) => {
        this.bookDetails = books.find(book => book.id === +bookId) || null;
        this.isLoading = false;
  
        if (!this.bookDetails) {
          console.error('Book not found');
        }
      }, (error) => {
        console.error('Error loading books:', error);
      });
    } else {
      console.error('Book ID is missing');
    }
  }
  
  

  public emitBookTitle():void{
    this.bookTitleEventEmitter.emit(this.book.title);
  }

  setStatus(status: string): void {
    // Verifica si el usuario está autenticado
    if (!this.authService.isAuthenticated()) {
      console.error('User is not authenticated. Redirecting to login...');
      this.router.navigate(['/login']);
      return;
    }
  
    // Si está autenticado, guarda el estado
    this.selectedStatus = status;
    console.log(`Selected status: ${status}`);
  
    this.bookService.setBookStatus(this.bookDetails!.id, status).subscribe({
      next: () => {
      },
      error: (err) => {
        console.error('Error updating status:', err);
        alert('Error updating status. Please try again later.');
      }
    });
  }  

  getCategoryNames(): string {
    if (!this.bookDetails || !this.bookDetails.categories) return '';
    return this.bookDetails.categories.map(cat => cat.name).join(', ');
  }
  
}
