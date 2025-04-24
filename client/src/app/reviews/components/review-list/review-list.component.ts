import { Component, Input, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'reviews-components-review-list',
  standalone: false,
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() bookId!: number;
  reviews: Review[] = [];
  loading = false;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  private loadReviews(): void {
    this.loading = true;
    this.reviewsService.getReviewsByBook(this.bookId)
      .subscribe({
        next: (reviews) => {
          this.reviews = reviews;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          alert('Error al cargar las reseñas.');
        }
      });
  }
}
