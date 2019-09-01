import { trimValue } from "../../validators/trim.validator";
import { ModalService } from "../../services/modal.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Movie } from "../../models/Movie";
import { ApiService } from "./../../services/api.service";
import { MovieServiceService } from "../../services/movie-service.service";
import { environment } from "./../../../environments/environment";

@Component({
	selector: "app-add-movie",
	templateUrl: "./add-movie.component.html",
	styleUrls: ["./add-movie.component.scss"]
})
export class AddMovieComponent implements OnInit {
	infoForm: FormGroup;

	constructor(private api: ApiService, private movie: MovieServiceService, private modal: ModalService) {}

	ngOnInit() {
		this.infoForm = new FormGroup({
			title: new FormControl("", [Validators.required, trimValue, Validators.pattern("[^\u0590-\u05FF]*")]),
			overView: new FormControl("", [Validators.required, trimValue, Validators.pattern("[^\u0590-\u05FF]*")]),
			releaseDate: new FormControl("", Validators.required)
		});
	}

	onAddMovie() {
		let newMovie = new Movie();
		newMovie.id = this.api.getId();
		newMovie.title = this.infoForm.value.title;
		newMovie.release_date = this.infoForm.value.releaseDate;
		newMovie.overview = this.infoForm.value.overView;
		newMovie.poster_path = environment.defaultImage;
		this.movie.addNewMovie(newMovie);
		this.infoForm.reset();
		this.modal.closeDialog();
	}

	resetForm() {
		this.infoForm.reset();
	}
}
