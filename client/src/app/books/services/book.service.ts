import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, Reading } from '../interfaces/book.interface';
import { Observable } from 'rxjs';
import { AuthService } from '../../sections/services/auth.service';
import { Review } from '../../reviews/interfaces/review.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url: string = 'http://localhost/api/books';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getUserReadings(): Observable<any> {
    return this.http.get(`http://localhost/api/user/readings`, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
  }

  public getBooksByCategory(categories: string[]): Observable<Book[]> {
    const categoriesParam = categories.join(',');
    return this.http.get<Book[]>(`${this.url}?categories=${categoriesParam}`);
  }

  public setBookStatus(bookId: number, status: string): Observable<any> {
    const token = this.authService.getToken();
    console.log('Token enviado:', token);
    if (!token) {
      throw new Error('No authenticated token found');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const body = { status };

    return this.http.post(`http://localhost/api/book/${bookId}/status`, body, { headers });
  }

  public getReviewsByBook(bookId: number): Observable<Review[]> {
    const token = this.authService.getToken();
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : undefined;

    return this.http.get<Review[]>(`http://localhost/api/book/${bookId}/reviews`, { headers });
  }
}
