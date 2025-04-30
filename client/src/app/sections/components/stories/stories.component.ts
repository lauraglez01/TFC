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
      next: () => this.loadStories(),
      error: (err) => {
        console.error(err);
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
}
