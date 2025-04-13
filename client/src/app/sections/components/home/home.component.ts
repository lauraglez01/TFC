import { Component, OnInit } from '@angular/core';
import { Book } from '../../../books/interfaces/book.interface';
import { BookService } from '../../../books/services/book.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBooks: Book[] = [];
  public recommendedBooks: Book[] = [];
  public filteredBooks: Book[] = [];
  public isLoading: boolean = true;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.allBooks = books;

      this.recommendedBooks = this.getRecommendedBooks(books, 3);
      this.filteredBooks = books.filter(book => !this.recommendedBooks.includes(book));

      this.isLoading = false;
    });
  }

  private getRecommendedBooks(books: Book[], count: number): Book[] {
    const random = books.sort(() => 0.5 - Math.random());
    return random.slice(0, count);
  }

  filterBooks(query: string): void {
    const searchQuery = query.toLowerCase().trim();
    this.filteredBooks = this.allBooks
      .filter(book => !this.recommendedBooks.includes(book)) 
      .filter((book: Book) => {
        return (
          book.title.toLowerCase().includes(searchQuery) ||
          book.author.toLowerCase().includes(searchQuery) ||
          book.description.toLowerCase().includes(searchQuery)
        );
      });
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filterBooks(input.value);
  }

  clearSearch(input: HTMLInputElement): void {
    input.value = '';
    this.filterBooks('');
  }
}