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
  private searchQuery: string = ''; // para mantener el estado de búsqueda

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.allBooks = books;

      this.recommendedBooks = this.getRecommendedBooks(books, 3);
      this.filteredBooks = []; // ← NO mostrar nada inicialmente

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

  filterBooks(): void {
    const hasSearch = this.searchQuery.trim().length > 0;
    const hasCategories = this.selectedCategories.size > 0;

    if (!hasSearch && !hasCategories) {
      this.filteredBooks = [];
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();

    this.filteredBooks = this.allBooks.filter((book: Book) => {
      const matchesSearch =
        query.length === 0 ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query);

      const matchesCategory =
        this.selectedCategories.size === 0 ||
        Array.from(this.selectedCategories).every(selected =>
          book.categories.some(cat => cat.name === selected)
        );

      const shouldInclude = matchesSearch && matchesCategory;

      return shouldInclude;
    });
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    console.log('Search input:', this.searchQuery);
    this.filterBooks();
  }

  clearSearch(input: HTMLInputElement): void {
    input.value = '';
    this.searchQuery = '';
    this.filterBooks();
  }

  onCategoryChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (input.checked) {
      this.selectedCategories.add(value);
    } else {
      this.selectedCategories.delete(value);
    }

    this.filterBooks();
  }

  getShortDescription(desc: string): string {
    return desc.length > 100 ? desc.slice(0, 100) + '...' : desc;
  }
}