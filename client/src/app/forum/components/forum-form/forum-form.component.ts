import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum-form',
  standalone: false,
  templateUrl: './forum-form.component.html',
  styleUrl: './forum-form.component.css'
})
export class ForumFormComponent implements OnInit {
  form: FormGroup;
  editing = false;
  postId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.postId) {
      this.editing = true;
      this.forumService.getPost(this.postId).subscribe(post => {
        this.form.patchValue({ title: post.title, content: post.content });
      });
    }
  }

  submit(): void {
    if (this.editing && this.postId) {
      this.forumService.updatePost(this.postId, this.form.value).subscribe(() => {
        this.router.navigate(['/forum', this.postId]);
      });
    } else {
      this.forumService.createPost(this.form.value).subscribe(post => {
        this.router.navigate(['/forum', post.id]);
      });
    }
  }
}

