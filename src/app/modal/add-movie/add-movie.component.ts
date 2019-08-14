import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, Validators, FormControl } from "@angular/forms";
import { Movie } from "src/app/models/Movie";
import { ApiService } from "./../../services/api.service";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { environment } from "./../../../environments/environment";
import { ModalService } from "src/app/services/modal.service";
import { trimValue } from 'src/app/validators/trim.validator';

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"]
})
export class AddMovieComponent implements OnInit {
  infoForm: FormGroup;

  constructor(private api: ApiService, private movie: MovieServiceService, private modal: ModalService) { }

  ngOnInit() {
    this.infoForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, trimValue]),
      'overView': new FormControl(null, [Validators.required, trimValue]),
      'releaseDate': new FormControl(null, [Validators.required, trimValue])
    });
  }

  onAddMovie() {
    let newMovie = new Movie();
    newMovie.id = this.api.getId();
    newMovie.title = this.infoForm.value.movieName;
    newMovie.release_date = this.infoForm.value.movieReleaseDate;
    newMovie.overview = this.infoForm.value.movieOverView;
    newMovie.poster_path = environment.defaultImage;
    this.movie.addNewMovie(newMovie);
    this.infoForm.reset();
    this.modal.close();
  }

  resetForm() {
    this.infoForm.reset();
  }
}
