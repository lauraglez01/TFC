import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from '../../services/forum.service';
import { ForumPost, ForumComment } from '../../interfaces/forum.interface';
import { AuthService } from '../../../sections/services/auth.service';
import { User } from '../../../user/interfaces/user.interface';

@Component({
  selector: 'app-forum-detail',
  standalone: false,
  templateUrl: './forum-detail.component.html',
  styleUrl: './forum-detail.component.css',
})
export class ForumDetailComponent implements OnInit {
  post: ForumPost | null = null;
  posts: ForumPost[] = [];
  postId!: number;
  user: User | null = null;
  editingCommentId: number | null = null;
  editedCommentContent: string = '';

  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));

    this.authService.loadUser().subscribe({
      next: (user) => {
        this.user = user;
        this.authService.setUserId(user.id); // IMPORTANTE
      },
      error: () => {
        this.user = null;
      },
    });

    this.forumService.getPost(this.postId).subscribe((post) => {
      this.post = post;
    });
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

  deletePost(id: number) {
    if (confirm('¿Eliminar esta entrada?')) {
      this.forumService.deletePost(id).subscribe(() => {
        this.posts = this.posts.filter((p) => p.id !== id);
        this.router.navigate(['/forum']);
      });
    }
  }

  isPostOwner(userId: number): boolean {
    return this.user?.id === userId;
  }

  isCommentOwner(userId: number): boolean {
    return this.user?.id === userId;
  }

  deleteComment(commentId: number): void {
    this.forumService.deleteComment(commentId).subscribe({
      next: () => {
        // Filtra el comentario eliminado de la lista local
        this.post!.comments = this.post!.comments?.filter(
          (c) => c.id !== commentId
        );
      },
      error: () => {
        alert('Error deleting comment');
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

  editComment(comment: ForumComment): void {
    this.editingCommentId = comment.id;
    this.editedCommentContent = comment.content;
  }

  cancelCommentEdit(): void {
    this.editingCommentId = null;
    this.editedCommentContent = '';
  }

  saveCommentEdit(commentId: number): void {
    this.forumService
      .updateComment(commentId, this.editedCommentContent)
      .subscribe({
        next: () => {
          this.editingCommentId = null;
          this.onCommentAdded(); // recarga comentarios
        },
        error: () => alert('Error updating comment'),
      });
  }
}
