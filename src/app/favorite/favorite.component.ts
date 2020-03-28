import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../stores';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movies = this.movieService.favoriteMovies;
  }

  asFav() {
    return this.movies !== null && this.movies !== undefined;
  }
}
