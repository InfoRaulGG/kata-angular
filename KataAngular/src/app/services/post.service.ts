import { Injectable, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: no-unused-expression
  public getPosts(): Observable<any> {
    return this.http.get(this.url);
  }
}
