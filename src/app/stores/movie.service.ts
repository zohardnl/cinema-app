import { Injectable } from '@angular/core';
import { MovieStore } from './movie.store';
import { Movie } from './movie.model';
import { MovieQuery } from './movie.query';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { ID } from '@datorama/akita';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
  favoriteMovies: Movie[] = [];
  allData: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  url = {};

  constructor(private movieStore: MovieStore, private movieQuery: MovieQuery, private api: ApiService, private modal: MatSnackBar) {
  }


  searchMovie(value: string, page?: number) {
    value = value.trim();
    return this.api.searchMovie(value, page).pipe(
      tap((movies: any) => {
        this.allData.next(movies.total_results);
        if (movies.results.length < 1) {
          this.setMovies([]);
          this.modal.open('No movies for this search!', 'Search')._dismissAfter(2000);
        } else {
          this.setMovies(movies.results);
        }
      })
    );
  }

  getMovie(): Observable<Movie> {
    let index: number;
    let xmovie: Movie;
    const movies: Movie[] = this.getMovies();
    return this.api.getMovie().pipe(
      tap(movie => {
        xmovie = movie;
        index = movies.findIndex(fmovie => fmovie.title === xmovie.title);
        if (index === -1) {
          this.addMovie(movie);
        } else {
          this.modal.open('Movie already exist, Try again!', 'Show', {
            duration: 2000,
            panelClass: 'red-alert'
          });
        }
      })
    );
  }

  //check image of movie if exits
  checkMovieImage(movie: Movie) {
    if (movie) {
      if (movie.poster_path === environment.defaultImage) {
        this.url = {
          backgroundImage: `url(${environment.defaultImage})`
        };
      } else if (movie.poster_path) {
        this.url = {
          backgroundImage: `url(${environment.image}${movie.poster_path})`
        };
      } else {
        this.url = {
          backgroundImage: `url(${environment.errorImg})`
        };
      }
    } else {
      this.url = {
        backgroundImage: `url(${environment.errorImg})`
      };
    }
    return this.url;
  }

  getAllData() {
    return this.allData.asObservable();
  }

  setLoader(status: boolean) {
    this.movieStore.setLoading(status);
  }

  getLoader() {
    return this.movieQuery.loader$;
  }

  resetMovies(): void {
    this.setMovies([]);
    this.allData.next(0);
  }

  setFavoriteMovie(movie: Movie) {
    this.favoriteMovies.push(movie);
  }

  removeFavoriteMovie(movie: Movie) {
    let index = this.favoriteMovies.indexOf(movie);
    this.favoriteMovies.splice(index, 1);
  }

  removeFromList(movieId: ID) {
    this.movieStore.setLoading(true);
    this.removeMovie(movieId);
  }

  addNewMovie(newMovie: Movie) {
    this.movieStore.setLoading(true);
    let index: number;
    const movies: Movie[] = this.getMovies();
    if (movies.length >= 1) {
      index = movies.findIndex(movie => movie.title === newMovie.title);
      if (index >= 0) {
        this.modal.open('This movie already exist!', 'Add', {
          duration: 2000,
          panelClass: 'red-alert'
        });
      } else {
        this.addMovie(newMovie);
        this.modal.open('Movie added!', 'Add')._dismissAfter(2000);
      }
    } else {
      this.addMovie(newMovie);
      this.modal.open('Movie added!', 'Add')._dismissAfter(2000);
    }
  }

  patchMovie(movieId: ID, newDataMovie: Movie) {
    this.movieStore.setLoading(true);
    this.updateMovie(movieId, newDataMovie);
    this.modal.open('Movie updated!', 'Update')._dismissAfter(2000);
  }

  getMovies() {
    return this.movieQuery.getAll();
  }

  selectMovies() {
    return this.movieQuery.selectAll();
  }

  private updateMovie(movieId: ID, newDataMovie: Movie) {
    this.movieStore.update(movieId, newDataMovie);
    this.movieStore.setLoading(false);
  }

  private addMovie(movie: Movie) {
    this.movieStore.add(movie);
    this.movieStore.setLoading(false);
  }

  private removeMovie(movieId: ID) {
    this.movieStore.remove(movieId);
    this.movieStore.setLoading(false);
  }

  private setMovies(movies: Movie[]) {
    this.movieStore.set(movies);
    this.movieStore.setLoading(false);
  }
}
