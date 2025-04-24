// src/app/reviews/reviews.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- aquí
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

@NgModule({
  declarations: [ReviewFormComponent, ReviewListComponent],
  imports: [CommonModule, FormsModule],
  exports: [ReviewFormComponent, ReviewListComponent]
})
export class ReviewsModule {}
