import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumListComponent } from './components/forum-list/forum-list.component';
import { ForumFormComponent } from './components/forum-form/forum-form.component';
import { ForumDetailComponent } from './components/forum-detail/forum-detail.component';
import { ForumCommentComponent } from './components/forum-comment/forum-comment.component';
import { ForumService } from './services/forum.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForumListComponent,
    ForumFormComponent,
    ForumDetailComponent,
    ForumCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ForumRoutingModule
  ],
  providers: [ForumService],
})
export class ForumModule { }
