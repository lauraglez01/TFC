import { Component, Input } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { AuthService } from '../../../sections/services/auth.service';
import { BookService } from '../../../books/services/book.service';  // Importar el servicio de libros

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
  successMessage: string = '';  // Mensaje de éxito

  constructor(
    private reviewsService: ReviewsService,
    private authService: AuthService,
    private bookService: BookService  // Usamos el servicio de libros
  ) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  submitReview(): void {
    if (!this.isAuthenticated) {
      this.successMessage = 'Debes iniciar sesión para dejar una reseña.';
      return;
    }
    if (this.rating === null) {
      this.successMessage = 'Por favor, selecciona tu valoración.';
      return;
    }

    this.loading = true;
    this.reviewsService.createReview(this.bookId, {
      rating: this.rating,
      comment: this.comment.trim()
    }).subscribe({
      next: () => {
        this.successMessage = 'Reseña enviada con éxito!';
        this.rating = null;
        this.comment = '';

        // Ahora recargamos las reseñas
        this.bookService.getReviewsByBook(this.bookId).subscribe((reviews) => {
          this.bookService.updateReviews(this.bookId, reviews); // Actualizamos las reseñas
        });

        this.loading = false;
      },
      error: () => {
        this.successMessage = 'Error al enviar la reseña.';
        this.loading = false;
      }
    });
  }
}
