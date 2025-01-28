import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  servicedata: string = "Data from Service"

  constructor(private http: HttpClient) { }

  getAllPost() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
