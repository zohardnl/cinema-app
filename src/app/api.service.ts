import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPostTitle() {
    return this.http
      .get<any>("https://jsonplaceholder.typicode.com/posts")
      .pipe(map(res => res[0].title));
  }
}
