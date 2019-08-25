import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/Movie";
import { MovieServiceService } from "../services/movie-service.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"]
})
export class FavoriteComponent implements OnInit {
  movies: Movie[] = this.movie.favoriteMovies;
  movieInfo: Movie;

  constructor(private movie: MovieServiceService) {}

  ngOnInit() {}

  asFav() {
    return this.movies !== null && this.movies !== undefined;
  }
}
