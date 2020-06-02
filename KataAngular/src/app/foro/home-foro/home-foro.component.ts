import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-home-foro',
  templateUrl: './home-foro.component.html',
  styleUrls: ['./home-foro.component.css']
})
export class HomeForoComponent implements OnInit {

  constructor(private postService: PostService) { }
  items: Post[];
  
  ngOnInit() {
    this.getAllPost();
  }
  
  getAllPost(){
    this.postService.getPosts().subscribe(response => {
      this.items = response;
      console.log(this.items);
    }, error => {
      console.log(error); 
    });
  }

}
