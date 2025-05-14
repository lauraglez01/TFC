import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ForumComment, ForumPost } from '../../interfaces/forum.interface';
import { ForumService } from '../../services/forum.service';
import { AuthService } from '../../../sections/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-comment',
  standalone: false,
  templateUrl: './forum-comment.component.html',
  styleUrl: './forum-comment.component.css',
})
export class ForumCommentComponent {
  @Input() postId!: number;
  @Input() comments: ForumComment[] = [];
  @Output() commentAdded = new EventEmitter<void>();

  comment = '';

  constructor(
    private forumService: ForumService,
    private authService: AuthService,
    private router: Router
  ) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  submitComment() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    this.forumService.addComment(this.postId, this.comment).subscribe({
      next: () => {
        console.log('Comentario agregado correctamente');
        this.comment = '';
        this.commentAdded.emit();
      },
      error: (err) => {
        console.error('Error al agregar el comentario:', err);
      },
    });
  }
}
