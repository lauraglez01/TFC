import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { Story } from '../../interfaces/story.interface';

@Component({
  selector: 'app-stories',
  standalone: false,
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  stories: Story[] = [];
  pdfSrc: string | null = null; 

  constructor(private svc: StoriesService) {}

  ngOnInit() {
    this.loadStories();
  }

  loadStories() {
    this.svc.getStories().subscribe({
      next: (res) => (this.stories = res.stories),
      error: () => alert('Error loading stories'),
    });
  }

onFileSelected(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  this.svc.uploadStory(file).subscribe({
    next: (res) => {
      console.log('Archivo subido:', res.story); // Depuración: Verifica que el archivo se guarda en la propiedad file
      this.loadStories(); // Recarga las historias después de subir el archivo
    },
    error: (err) => {
      console.error('Error al subir el archivo:', err);
      alert('Upload failed');
    },
  });
}

  deleteStory(id: number) {
    this.svc.deleteStory(id).subscribe({
      next: () => (this.stories = this.stories.filter((s) => s.id !== id)),
      error: () => alert('Error deleting story'),
    });
  }

  viewStory(id: number): void {
    this.svc.getStoryContent(id).subscribe({
      next: (res) => {
        this.pdfSrc = res.url;
      },
      error: (err) => {
        console.error('Error loading story content:', err);
      },
    });
  }
}
