import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url: string = 'http://localhost/api/books';

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  public getBooksByCategory(categories: string[]): Observable<Book[]> {
    const categoriesParam = categories.join(',');
    return this.http.get<Book[]>(`${this.url}?categories=${categoriesParam}`);
  }
}
