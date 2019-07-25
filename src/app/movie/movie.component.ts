import {Movie} from "./../models/Movie";
import {Component, OnInit, EventEmitter, Output, Input, AfterViewInit} from "@angular/core";
import {ApiService} from "../services/api.service";
import {MovieServiceService} from "../services/movie-service.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "./snack-bar/snack-bar.component";
import {UiService} from "../services/ui.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit, AfterViewInit {
  imageUrl = {};
  @Input() movie: Movie;
  @Output() infoMovie = new EventEmitter<Movie>();
  @Input() elementId: number;
  @Output() updateMovie = new EventEmitter<Movie>();

  constructor(
    private api: ApiService,
    private movieServ: MovieServiceService,
    private route: Router,
    private snackBar: MatSnackBar,
    private sendToScroll: UiService
  ) {
  }

  ngOnInit() {
    this.imageUrl = this.api.checkMovieImage(this.movie);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.sendToScroll.scroll(this.elementId);
  }

  wishList() {
    if (!this.movieServ.favoriteMovies.includes(this.movie)) {
      this.movieServ.setFavoriteMovie(this.movie);
      this.modal("Movie added to favorites!");
    } else {
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 2000
      });
    }
  }

  openInfo() {
    this.infoMovie.emit(this.movie);
  }

  isFavorite() {
    return this.route.url !== "/favorites";
  }

  removeMovie() {
    this.movieServ.removeFavoriteMovie(this.movie);
    this.modal("Removed!");
  }

  modal(msg: string) {
    this.snackBar.open(msg)._dismissAfter(2000);
  }

  updateMov() {
    this.updateMovie.emit(this.movie);
  }
}
