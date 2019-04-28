import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get<any>("http://www.omdbapi.com/?apikey=4b8331d2&t=t");
  }
}
