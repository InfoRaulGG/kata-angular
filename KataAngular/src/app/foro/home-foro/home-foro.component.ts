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
  allItems: Post[];
  noEncontrados: boolean;

  pageSizeOptions = [5, 10, 50];
  pageSize: number = 5;
  pageNumber: number = 1;
  
  ngOnInit() {
    this.getAllPost();
  }

  handleSearch(e: string) {
    this.items = this.allItems.filter(value => value.title.includes(e) );
    if(this.items.length === 0){
      //mostrar panel de no encontrados.
      this.noEncontrados = true;
    }
    else{
      this.noEncontrados = false;
    }
  }


   handlePage(e: PageEvent) {

    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;

   }

  getAllPost() {
    this.postService.getPosts().subscribe(response => {
      this.allItems = response;
      this.items = this.allItems;
    }, error => {
      console.log(error); 
    });
  }

}
