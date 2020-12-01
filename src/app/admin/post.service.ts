import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "http://localhost:54868/api/Courseposts";

  constructor(private http: HttpClient) { }
  getposts():Observable<Post>{

    return this.http.get<Post>(this.url);
  }
}
