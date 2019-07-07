import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ElementRef, Injectable} from "@angular/core";
import {Movie} from "./models/Movie";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ApiService {
  num: number;
  url: object;

  constructor(private http: HttpClient) {
  }

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

  getMovieHttp(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}?api_key=${
        environment.apiKey
        }&query=${this.getChar()}`
    );
  }

  //SEARCH MOVIE REQUEST
  searchMovieHttp(searchElement: ElementRef): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}?api_key=${environment.apiKey}&query=${
        searchElement.nativeElement.value
        }`
    );
  }

  searchMovie(search: ElementRef): Observable<Movie[]> {
    return this.searchMovieHttp(search).pipe(
      map(movies => {
        return movies.results;
      })
    );
  }

  //check image of movie if exits
  checkMovieImage(movie: Movie): object {
    if (movie !== undefined) {
      if (
        movie.poster_path !== undefined &&
        movie.poster_path !== "" &&
        movie.poster_path !== null
      ) {
        this.url = {
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
        };
      } else {
        this.url = {
          backgroundImage: `url(https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg)`
        };
      }
    }
    else {
      this.url = {
        backgroundImage: `url(https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg)`
      };
    }
    return this.url;
  }

  //RANDOM FUNCTIONS
  getChar(): string {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  }

  getNumber(): number {
    return Math.floor(Math.random() * 20);
  }
}
