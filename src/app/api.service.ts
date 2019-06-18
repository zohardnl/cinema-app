import { HttpClient } from "@angular/common/http";
import { Injectable, ElementRef } from "@angular/core";
import { MovieResponse, Movie, movieMdb } from "./models/Movie";
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

  searchMovie(searchElement: ElementRef) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/search/company?api_key=4d9fc135f367468f10bcbf31008637e6&query=${
        searchElement.nativeElement.value
      }`
    );
  }

  searchMovieMdb(search: ElementRef): Observable<any> {
    return this.searchMovie(search).pipe(
      map(movie => {
        return {
          id: movie.results[0].id,
          name: movie.results[0].name
        } as movieMdb;
      })
    );
  }

  getChar() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  }

  getID() {
    return Math.floor(Math.random() * 1000 + 1);
  }
}
