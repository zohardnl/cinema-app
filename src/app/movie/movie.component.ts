import { RemoveMovieComponent } from "./../modal/remove-movie/remove-movie.component";
import { Movie } from "./../models/Movie";
import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { MovieServiceService } from "../services/movie-service.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UiService } from "../services/ui.service";
import { ModalService } from "../services/modal.service";
import { InfoMovieComponent } from "../modal/info-movie/info-movie.component";
import { UpdateMovieComponent } from "../modal/update-movie/update-movie.component";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit, AfterViewInit {
  imageUrl = {};
  @Input() movie: Movie;
  @Input() elementId: number;

  constructor(
    private api: ApiService,
    private movieServ: MovieServiceService,
    private route: Router,
    private snackBar: MatSnackBar,
    private sendToScroll: UiService,
    private dialogService: ModalService
  ) {}

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
      this.modal("Movie added to favorites!", "Favorite");
    } else {
      this.snackBar.open("This movie already exist!", "Favorite", {
        duration: 2000,
        panelClass: "red-alert"
      });
    }
  }

  isFavorite() {
    return this.route.url !== "/favorites";
  }

  openInfo() {
    this.dialogService.openDialog(InfoMovieComponent, this.movie);
  }

  removeMovie() {
    this.dialogService.openDialog(RemoveMovieComponent, this.movie);
  }

  removeFromList() {
    this.dialogService.openDialog(RemoveMovieComponent, this.movie);
  }

  updateMov() {
    this.dialogService.openDialog(UpdateMovieComponent, this.movie);
  }

  modal(msg: string, action: string) {
    this.snackBar.open(msg, action)._dismissAfter(2000);
  }
}
