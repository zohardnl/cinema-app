import { Observable } from "rxjs";
import { Movie } from "./models/Movie";
import { ApiService } from "./api.service";
import { Injectable, ElementRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class MovieServiceService {
  private _movies: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  movies$: Observable<Movie[]> = this._movies.asObservable();

  constructor(private api: ApiService) { }

  getMovie(): Observable<Movie> {
    return this.api.getMovie().pipe(
      tap(movie => {
        this._movies.next([...this._movies.value, movie]);
      })
    );
  }

  getSearch(name: ElementRef): Observable<Movie[]> {
    return this.api.searchMovie(name).pipe(
      tap(movies => {
        this._movies.next(movies);
      })
    );
  }

  resetMovies(): void {
    this._movies.next([]);
  }
}
