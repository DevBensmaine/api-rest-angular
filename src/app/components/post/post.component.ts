import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.getPostNow();
  }

  getPostNow(){
    this.postService.getPosts()
        .subscribe(res => console.log(res))
  }

}
