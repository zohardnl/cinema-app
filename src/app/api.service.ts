import { HttpClient } from "@angular/common/http";
import { Injectable, ElementRef } from "@angular/core";
import { Movie } from "./models/Movie";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //SHOW MOVIE REQUSEST
  getMovie(): Observable<Movie> {
    return this.getMovieHttp().pipe(
      map(movieRes => {
        return {
          id: movieRes.results[0].id,
          title: movieRes.results[0].title,
          poster_path: movieRes.results[0].poster_path,
          release_date: movieRes.results[0].release_date,
          overview: movieRes.results[0].overview
        } as Movie;
      })
    );
  }

  getMovieHttp() {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/search/movie?api_key=4d9fc135f367468f10bcbf31008637e6&query=${this.getChar()}`
    );
  }

  //SEARCH MOVIE REQUEST
  searchMovieHttp(searchElement: ElementRef) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/search/movie?api_key=4d9fc135f367468f10bcbf31008637e6&query=${
        searchElement.nativeElement.value
      }`
    );
  }

  searchMovie(search: ElementRef): Observable<any> {
    return this.searchMovieHttp(search).pipe(
      map(movie => {
        return {
          id: movie.results[0].id,
          title: movie.results[0].title,
          poster_path: movie.results[0].poster_path,
          release_date: movie.results[0].release_date,
          overview: movie.results[0].overview
        } as Movie;
      })
    );
  }

  //RANDOM FUNCTIONS
  getChar() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  }

  getID() {
    return Math.floor(Math.random() * 1000 + 1);
  }
}
