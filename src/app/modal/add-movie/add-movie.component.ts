import { ModalService } from "src/app/services/modal.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Movie } from "src/app/models/Movie";
import { ApiService } from "./../../services/api.service";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { environment } from "./../../../environments/environment";
import { trimValue } from "src/app/validators/trim.validator";

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
      title: new FormControl("", [Validators.required, trimValue]),
      overView: new FormControl("", [Validators.required, trimValue]),
      releaseDate: new FormControl("", [Validators.required, trimValue])
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
