// forum.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumPost, ForumComment } from '../interfaces/forum.interface';
import { AuthService } from '../../sections/services/auth.service';

@Injectable({ providedIn: 'root' })
export class ForumService {
  private apiUrl = 'http://localhost/api/forum';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getPosts(): Observable<ForumPost[]> {
    return this.http.get<ForumPost[]>(`${this.apiUrl}`, {
      headers: this.authHeaders(),
    });
  }

  getPost(id: number): Observable<ForumPost> {
    return this.http.get<ForumPost>(`${this.apiUrl}/${id}`, {
      headers: this.authHeaders(),
    });
  }

  createPost(post: Partial<ForumPost>): Observable<ForumPost> {
    return this.http.post<ForumPost>(this.apiUrl, post, {
      headers: this.authHeaders(),
    });
  }

  updatePost(id: number, post: Partial<ForumPost>): Observable<ForumPost> {
    return this.http.put<ForumPost>(`${this.apiUrl}/${id}`, post, {
      headers: this.authHeaders(),
    });
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.authHeaders(),
    });
  }

  addComment(postId: number, content: string): Observable<ForumComment> {
    return this.http.post<ForumComment>(
      `${this.apiUrl}/${postId}/comments`,
      { content },
      { headers: this.authHeaders() }
    );
  }

  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/comments/${commentId}`, {
      headers: this.authHeaders(),
    });
  }
  
  updateComment(commentId: number, content: string): Observable<ForumComment> {
    return this.http.put<ForumComment>(
      `${this.apiUrl}/comments/${commentId}`,
      { content },
      { headers: this.authHeaders() }
    );
  }
}
