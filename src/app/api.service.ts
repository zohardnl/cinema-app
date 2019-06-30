import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable, ElementRef } from "@angular/core";
import { Movie } from "./models/Movie";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  num: number;
  url: Object;

  constructor(private http: HttpClient, private route: Router) {}

  //SHOW MOVIE REQUSEST
  getMovie(): Observable<Movie> {
    this.num = this.getNumber();
    return this.getMovieHttp().pipe(
      map(movieRes => {
        return {
          id: movieRes.results[this.num].id,
          title: movieRes.results[this.num].title,
          poster_path: movieRes.results[this.num].poster_path,
          release_date: movieRes.results[this.num].release_date,
          overview: movieRes.results[this.num].overview
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
        return movie;
      })
    );
  }

  //check image of movie if exits
  checkMovieImage(movie: any) {
    if (
      movie.poster_path !== undefined &&
      movie.poster_path !== "" &&
      movie.poster_path !== null
    ) {
      this.url = {
        background: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
      };
    } else {
      this.url = {
        background: `url(https://content.schoolinsites.com/api/documents/ebbca81b01694c91aa908f5374842a9f.gif)`
      };
    }
    return this.url;
  }

  //navigate links
  navigatePages(link: string) {
    this.route.navigate([link]);
  }

  //RANDOM FUNCTIONS
  getChar() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  }

  getNumber() {
    return Math.floor(Math.random() * 20);
  }
}
