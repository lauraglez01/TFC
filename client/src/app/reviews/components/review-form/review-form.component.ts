import { Component, Input } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { AuthService } from '../../../sections/services/auth.service';
import { BookService } from '../../../books/services/book.service';

@Component({
  selector: 'reviews-components-review-form',
  standalone: false,
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  @Input() bookId!: number;
  rating: number | null = null;
  comment: string = '';
  loading = false;
  isAuthenticated = false;
  successMessage: string = ''; 

  constructor(
    private reviewsService: ReviewsService,
    private authService: AuthService,
    private bookService: BookService  
  ) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  submitReview(): void {
    if (!this.isAuthenticated) {
      this.successMessage = 'You need to log in to leave a review.';
      return;
    }
    if (this.rating === null) {
      this.successMessage = 'Please, select your rating.';
      return;
    }

    this.loading = true;
    this.reviewsService.createReview(this.bookId, {
      rating: this.rating,
      comment: this.comment.trim()
    }).subscribe({
      next: () => {
        this.rating = null;
        this.comment = '';

        window.location.reload();

        this.loading = false;
      },
      error: () => {
        this.successMessage = 'Error sending the review.';
        this.loading = false;
      }
    });
  }
}
