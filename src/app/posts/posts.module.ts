import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { EditorComponent } from './editor/editor.component';
import { PostsRoutingModule } from './posts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PostComponent, PostsComponent, EditorComponent],
  exports: [
    PostComponent,
    PostsComponent,
    EditorComponent
  ]
})
export class PostsModule { }
