import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../stores/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  num: number;

  constructor(private http: HttpClient) {
  }

  //SHOW MOVIE REQUSEST
  getMovie(): Observable<Movie> {
    this.num = this.getNumber();
    return this.getMovieHttp().pipe(
      map((movieRes: any) => {
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

  getMovieHttp(): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}?api_key=${environment.apiKey}&query=${this.getChar()}`);
  }

  //SEARCH MOVIE REQUEST
  searchMovieHttp(value: string, page?: number): Observable<Movie[]> {
    if (page) {
      return this.http.get<Movie[]>(`${environment.apiUrl}?api_key=${environment.apiKey}&query=${value}&page=${page}`);
    } else {
      return this.http.get<Movie[]>(`${environment.apiUrl}?api_key=${environment.apiKey}&query=${value}`);
    }
  }


  searchMovie(search: string, page?: number): Observable<Movie[]> {
    return this.searchMovieHttp(search, page).pipe(
      map(res => {
        return res;
      })
    );
  }

  //RANDOM FUNCTIONS
  getChar(): string {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
  }

  getNumber(): number {
    return Math.floor(Math.random() * 20);
  }

  getId(): number {
    return Math.floor(Math.random() * 10000 + 1);
  }
}
