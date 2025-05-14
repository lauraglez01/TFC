import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from '../../services/forum.service';
import { ForumPost } from '../../interfaces/forum.interface';
import { AuthService } from '../../../sections/services/auth.service';

@Component({
  selector: 'app-forum-detail',
  standalone: false,
  templateUrl: './forum-detail.component.html',
  styleUrl: './forum-detail.component.css',
})
export class ForumDetailComponent implements OnInit {
  post: ForumPost | null = null;
  postId!: number;

  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService
      .getPost(this.postId)
      .subscribe((post) => (this.post = post));
  }

  edit() {
    this.router.navigate(['/forum', this.postId, 'edit']);
  }

  delete() {
    if (confirm('¿Eliminar esta entrada?')) {
      this.forumService.deletePost(this.postId).subscribe(() => {
        this.router.navigate(['/forum']);
      });
    }
  }

  isPostOwner(userId: number): boolean {
    const currentUserId = this.authService.getUserId();
    if (!currentUserId) return false; // Si no hay usuario autenticado, retorna false
    return currentUserId === userId;
  }

  isCommentOwner(userId: number): boolean {
    const currentUserId = this.authService.getUserId();
    if (!currentUserId) return false; // Si no hay usuario autenticado, retorna false
    return currentUserId === userId;
  }

  deleteComment(commentId: number): void {
    this.forumService.deleteComment(commentId).subscribe({
      next: () => {
        this.post!.comments = this.post!.comments!.filter(
          (c) => c.id !== commentId
        );
      },
      error: (err) => {
        console.error('Error deleting comment:', err);
      },
    });
  }

  onCommentAdded(): void {
    this.forumService.getPost(this.postId).subscribe({
      next: (post) => {
        this.post!.comments = post.comments; // Reemplaza la lista de comentarios
      },
      error: (err) => {
        console.error('Error al actualizar los comentarios:', err);
      },
    });
  }
}
