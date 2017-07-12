import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/Auth.guard';
import { LoginComponent } from './views/login/login.component';
import { RegisteComponent } from './views/registe/registe.component';
import { CommentsComponent } from './views/comments/comments.component';
import { ManagementComponent } from './views/management/management.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'enter',
    pathMatch: 'full'
  },
  {
    path: 'enter',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registe', component: RegisteComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ]
  },
  {
    path: 'handle',
    children: [
      { path: 'administer', component: ManagementComponent },
      { path: 'comment', component: CommentsComponent },
      {path: '', redirectTo: 'comment', pathMatch: 'full'}
    ],
    canActivate: [ AuthGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
