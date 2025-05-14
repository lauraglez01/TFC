import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumListComponent } from './components/forum-list/forum-list.component';
import { ForumFormComponent } from './components/forum-form/forum-form.component';
import { ForumDetailComponent } from './components/forum-detail/forum-detail.component';
import { AuthGuard } from '../sections/services/auth.guard'; 

const routes: Routes = [
  { path: '', component: ForumListComponent }, 
  { path: 'new', component: ForumFormComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ForumDetailComponent }, 
  { path: ':id/edit', component: ForumFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule {}
