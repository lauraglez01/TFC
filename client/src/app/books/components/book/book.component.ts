import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'books-components-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input()
  public book!: Book;

  @Output()
  public bookTitleEventEmitter: EventEmitter<string> = new EventEmitter<string>;

  public emitBookTitle():void{
    this.bookTitleEventEmitter.emit(this.book.title);
  }
}
