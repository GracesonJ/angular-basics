import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  servicedata: string = "Data from Service"

  constructor(private http: HttpClient) { }

  getAllPost():Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
