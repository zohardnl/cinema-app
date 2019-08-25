import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Movie } from "src/app/models/Movie";
import { Validators } from "@angular/forms";
import { ModalService } from "src/app/services/modal.service";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { trimValue } from "src/app/validators/trim.validator";

@Component({
  selector: "app-update-movie",
  templateUrl: "./update-movie.component.html",
  styleUrls: ["./update-movie.component.scss"]
})
export class UpdateMovieComponent implements OnInit {
  updateForm: FormGroup;
  updatedMovie: Movie;

  constructor(private modal: ModalService, private movie: MovieServiceService) {}

  ngOnInit() {
    this.updatedMovie = this.modal.movie;
    this.updateForm = new FormGroup({
      title: new FormControl(this.updatedMovie.title, [Validators.required, trimValue]),
      overView: new FormControl(this.updatedMovie.overview, [Validators.required, trimValue]),
      releaseDate: new FormControl(this.updatedMovie.release_date, [Validators.required, trimValue])
    });
  }

  onUpdateMovie() {
    let newMovie = new Movie();
    newMovie.title = this.updateForm.value.title;
    newMovie.overview = this.updateForm.value.overView;
    newMovie.release_date = this.updateForm.value.releaseDate;
    this.movie.updateMovie(this.updatedMovie, newMovie);
    this.modal.close();
  }
}
