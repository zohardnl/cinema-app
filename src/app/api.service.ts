import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MovieResponse, Movie } from "./models/Movie";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovie(): Observable<Movie> {
    return this.getMovieHttp().pipe(
      map(movieRes => {
        return {
          id: this.getID(),
          title: movieRes.Title,
          poster: movieRes.Poster,
          year: +movieRes.Year,
          runtime: movieRes.Runtime,
          genre: movieRes.Genre,
          director: movieRes.Director
        } as Movie;
      })
    );
  }

  getMovieHttp() {
    return this.http.get<MovieResponse>(
      `https://www.omdbapi.com/?apikey=4b8331d2&t=${this.getChar()}`
    );
  }

  getChar() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  }

  getID() {
    return Math.floor(Math.random() * 1000 + 1);
  }
}
