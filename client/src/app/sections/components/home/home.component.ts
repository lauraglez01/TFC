import { Component, OnInit } from '@angular/core';
import { Book } from '../../../books/interfaces/book.interface';
import { BookService } from '../../../books/services/book.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public recommendedBooks: Book[] = [];
  constructor(private bookService:BookService){}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.recommendedBooks = this.getRecommendedBooks(books,3);
    })
  }

  private getRecommendedBooks(books: Book[], count: number): Book[] {
    const random = books.sort(() => 0.5 - Math.random());
    return random.slice(0, count);
  }
}
