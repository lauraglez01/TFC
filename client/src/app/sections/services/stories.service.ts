// src/app/stories/services/stories.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../interfaces/story.interface';

@Injectable({ providedIn: 'root' })
export class StoriesService {
  private apiUrl = 'http://localhost/api/stories';

  constructor(private http: HttpClient) {}

  private authHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getStories(): Observable<{ stories: Story[] }> {
    return this.http.get<{ stories: Story[] }>(this.apiUrl, {
      headers: this.authHeaders(),
    });
  }

  uploadStory(file: File): Observable<{ story: Story }> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ story: Story }>(`${this.apiUrl}/upload`, form, {
      headers: this.authHeaders(),
    });
  }

getStoryContent(id: number): Observable<{ url: string }> {
  return this.http.get<{ url: string }>(`${this.apiUrl}/${id}/content`, {
    headers: this.authHeaders(),
  });
}


  deleteStory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.authHeaders(),
    });
  }
}
