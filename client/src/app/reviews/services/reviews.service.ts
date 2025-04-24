// src/app/reviews/services/reviews.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../interfaces/review.interface';
import { AuthService } from '../../sections/services/auth.service';

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  private baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getReviewsByBook(bookId: number): Observable<Review[]> {
    const headers = this.auth.getToken()
      ? new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` })
      : undefined;
    return this.http.get<Review[]>(`${this.baseUrl}/books/${bookId}/reviews`, { headers });
  }

  createReview(bookId: number, payload: { rating: number; comment: string }): Observable<Review> {
    const headers = this.auth.getToken()
      ? new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` })
      : undefined;
    return this.http.post<Review>(
      `${this.baseUrl}/books/${bookId}/reviews`, 
      payload,
      { headers }
    );
  }
}