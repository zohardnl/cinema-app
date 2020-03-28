import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Movie, MovieService } from '../stores';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies$: Observable<Movie[]> = this.movieService.selectMovies();
  loader$: Observable<boolean> = this.movieService.getLoader();

  constructor(public movieService: MovieService) {}

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
