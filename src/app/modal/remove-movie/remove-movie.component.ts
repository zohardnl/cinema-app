import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Movie } from "./../../models/Movie";
import { OpenModalService } from "./../../services/open-modal.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-remove-movie",
  templateUrl: "./remove-movie.component.html",
  styleUrls: ["./remove-movie.component.scss"]
})
export class RemoveMovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private modal: ModalService,
    private movieServ: MovieServiceService,
    private snackBar: MatSnackBar,
    private openModal: OpenModalService,
    private route: Router
  ) {}

  ngOnInit() {
    this.movie = this.modal.movie;
  }

  removeMovie() {
    this.movieServ.removeFromList(this.movie);
    this.openModal.dialogRef.close();
    this.snackBar.open("Removed!", "Remove")._dismissAfter(2000);
  }

  isFavorite() {
    return this.route.url !== "/favorites";
  }

  removeFavorite() {
    this.movieServ.removeFavoriteMovie(this.movie);
    this.openModal.dialogRef.close();
    this.snackBar.open("Removed!", "Remove")._dismissAfter(2000);
  }
}
