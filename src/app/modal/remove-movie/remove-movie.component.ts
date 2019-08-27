import { ModalService } from "src/app/services/modal.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Movie } from "src/app/models/Movie";

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
		private modal: ModalService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit() {
		this.movie = this.data.movie;
	}

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
