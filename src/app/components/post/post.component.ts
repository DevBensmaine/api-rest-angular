import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/Post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:Post[] = [];
  errorMessage:string = "";

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.getPostNow();
  }

  getPostNow(){
    this.postService.getPosts()
        .subscribe(
        {
          next: posts => this.posts = posts,
          error: err=>this.errorMessage = err
        }

          )
  }

}
