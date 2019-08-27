import { ModalService } from "src/app/services/modal.service";
import { Component, OnInit } from "@angular/core";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Movie } from "./../../models/Movie";
import { Router } from "@angular/router";

@Component({
	selector: "app-remove-movie",
	templateUrl: "./remove-movie.component.html",
	styleUrls: ["./remove-movie.component.scss"]
})
export class RemoveMovieComponent implements OnInit {
	movie: Movie;

	constructor(
		private movieServ: MovieServiceService,
		private snackBar: MatSnackBar,
		private route: Router,
		private modal: ModalService
	) {}

	ngOnInit() {}

	removeMovie() {
		this.movieServ.removeFromList(this.movie);
		this.snackBar.open("Removed!", "Remove")._dismissAfter(2000);
		this.modal.closeDialog();
	}

	removeFavorite() {
		this.movieServ.removeFavoriteMovie(this.movie);
		this.snackBar.open("Removed!", "Remove")._dismissAfter(2000);
		this.modal.closeDialog();
	}

	isFavorite() {
		return this.route.url !== "/favorites";
	}
}
