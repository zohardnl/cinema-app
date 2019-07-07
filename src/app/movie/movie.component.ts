import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ApiService } from "../api.service";
import { Movie } from "../models/Movie";
import { MovieServiceService } from "../movie-service.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "./snack-bar/snack-bar.component";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  imageUrl: object;
  @Input() movie: Movie;
  @Output() infoMovie = new EventEmitter<Movie>();

  constructor(
    private api: ApiService,
    private movieServ: MovieServiceService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.imageUrl = this.api.checkMovieImage(this.movie);
  }

  wishList() {
    this.movieServ.setFavoriteMovie(this.movie);
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000
    });
  }

  openInfo() {
    this.infoMovie.emit(this.movie);
  }

  isFavorite() {
    return this.route.url !== "/favorites";
  }
}
