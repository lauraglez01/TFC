import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from '../../services/forum.service';
import { ForumPost } from '../../interfaces/forum.interface';
import { AuthService } from '../../../sections/services/auth.service';

@Component({
  selector: 'app-forum-list',
  standalone: false,
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.css',
})
export class ForumListComponent implements OnInit {
  posts: ForumPost[] = [];

  constructor(
    private forumService: ForumService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.forumService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  goToPost(id: number) {
    this.router.navigate(['/forum', id]);
  }

  newPost() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }
    this.router.navigate(['/forum/new']);
  }
}
