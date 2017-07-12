import { AuthGuard } from './guards/Auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 服务
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service'
// 用到的
import { MaterialAssembleModule } from './modules/material-assemble.module';
// 界面
import { LoginComponent } from './views/login/login.component';
import { RegisteComponent } from './views/registe/registe.component';
import { CommentsComponent } from './views/comments/comments.component';
import { ManagementComponent } from './views/management/management.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteComponent,
    CommentsComponent,
    ManagementComponent,
    CommentItemComponent,
    CommentBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAssembleModule
  ],
  providers: [ ApiService, AuthGuard, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
