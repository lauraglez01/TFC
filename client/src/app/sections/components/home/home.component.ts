import { Component, OnInit } from '@angular/core';
import { Book } from '../../../books/interfaces/book.interface';
import { BookService } from '../../../books/services/book.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public allBooks: Book[] = [];
  public recommendedBooks: Book[] = [];
  public filteredBooks: Book[] = [];
  public categories: string[] = [];
  public selectedCategories: Set<string> = new Set();
  public isLoading: boolean = true;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.allBooks = books;

      this.recommendedBooks = this.getRecommendedBooks(books, 3);
      this.filteredBooks = books.filter(
        (book) => !this.recommendedBooks.includes(book)
      );

      this.categories = Array.from(
        new Set(books.flatMap((book) => book.categories.map((cat) => cat.name)))
      ).sort();

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
      .filter((book) => !this.recommendedBooks.includes(book))
      .filter((book: Book) => {
        const matchesSearch =
          book.title.toLowerCase().includes(searchQuery) ||
          book.author.toLowerCase().includes(searchQuery) ||
          book.description.toLowerCase().includes(searchQuery);
  
          const matchesCategory =
          Array.from(this.selectedCategories).every(selected =>
            book.categories.some(cat => cat.name === selected)
          );
        
  
        return matchesSearch && matchesCategory;
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

  getShortDescription(desc: string): string {
    return desc.length > 100 ? desc.slice(0, 100) + '...' : desc;
  }

  onCategoryChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (input.checked) {
      this.selectedCategories.add(value);
    } else {
      this.selectedCategories.delete(value);
    }

    this.filterBooks(
      (document.querySelector('#searchInput') as HTMLInputElement)?.value || ''
    );
  }
}
