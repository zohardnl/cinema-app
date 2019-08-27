import { ModalService } from "src/app/services/modal.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Movie } from "src/app/models/Movie";
import { Validators } from "@angular/forms";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { trimValue } from "src/app/validators/trim.validator";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
	selector: "app-update-movie",
	templateUrl: "./update-movie.component.html",
	styleUrls: ["./update-movie.component.scss"]
})
export class UpdateMovieComponent implements OnInit {
	updateForm: FormGroup;
	updatedMovie: Movie;

	constructor(
		private movieService: MovieServiceService,
		private modal: ModalService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit() {
		this.updatedMovie = this.data.movie;
		this.updateForm = new FormGroup({
			title: new FormControl(this.updatedMovie.title.trim(), [Validators.required, trimValue]),
			overView: new FormControl(this.updatedMovie.overview.trim(), [Validators.required, trimValue]),
			releaseDate: new FormControl(this.updatedMovie.release_date.trim(), [Validators.required, trimValue])
		});
	}

	onUpdateMovie() {
		let newMovie = new Movie();
		newMovie.title = this.updateForm.value.title;
		newMovie.overview = this.updateForm.value.overView;
		newMovie.release_date = this.updateForm.value.releaseDate;
		this.movieService.updateMovie(this.updatedMovie, newMovie);
		this.modal.closeDialog();
	}
}
