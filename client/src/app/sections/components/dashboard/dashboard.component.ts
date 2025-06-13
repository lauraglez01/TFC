import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../books/services/book.service';
import { Book, Reading } from '../../../books/interfaces/book.interface';
import { AuthService } from '../../../sections/services/auth.service';
import { User } from '../../../user/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public booksByStatus: { [status: string]: Book[] } = {};
  public user: User | null = null;

  constructor(private bookService: BookService,
    private authService: AuthService 
  ) {}

  ngOnInit(): void {
    this.authService.loadUser().subscribe({
      next: (user) => this.user = user,
      error: () => this.user = null
    });
    this.bookService.getUserReadings().subscribe((readings: Reading[]) => {
      this.booksByStatus = {};

      readings.forEach(reading => {
        const status = reading.status || 'not started';
        const book = reading.book;

        if (!book) return;

        if (!this.booksByStatus[status]) {
          this.booksByStatus[status] = [];
        }
        
        this.booksByStatus[status].push(book);
      });
    });
  }

  getCategoryNames(book: Book): string {
    return book.categories?.map(c => c.name).join(', ') || '';
  }

  getStatuses(): string[] {
    return ['Reading', 'Planned', 'On Hold', 'Dropped', 'Completed', 'Rereading'];
  }
}
