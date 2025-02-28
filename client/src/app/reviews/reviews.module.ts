import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './components/review/review.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    ReviewComponent,
    ReviewsListComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReviewsModule { }
