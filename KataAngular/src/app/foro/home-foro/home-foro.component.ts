import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/Post';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home-foro',
  templateUrl: './home-foro.component.html',
  styleUrls: ['./home-foro.component.css']
})
export class HomeForoComponent implements OnInit {

  constructor(private postService: PostService) { }
  items: Post[];

  pageSizeOptions = [5, 10, 50];
  pageSize: number = 5;
  pageNumber: number = 1;
  
  ngOnInit() {
    this.getAllPost();
  }
   handlePage(e: PageEvent){

    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;

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
