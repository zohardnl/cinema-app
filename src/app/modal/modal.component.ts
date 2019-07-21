import {environment} from "./../../environments/environment";
import {MovieServiceService} from "./../services/movie-service.service";
import {ApiService} from "./../services/api.service";
import {Component, OnInit, Input} from "@angular/core";
import {Movie} from "../models/Movie";
import {NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class Modal implements OnInit {
  @Input() movieInfo: Movie;
  @Input() add: boolean;

  newMovie: Movie = {
    id: 0,
    overview: "",
    poster_path: "",
    release_date: "",
    title: ""
  };

  constructor(
    private api: ApiService,
    private movie: MovieServiceService,
    private modal: MatSnackBar
  ) {}

  ngOnInit() {}

  onAddMovie(form: NgForm) {
    this.newMovie.id = this.api.getId();
    this.newMovie.title = form.value.movieName;
    this.newMovie.release_date = form.value.movieReleaseDate;
    this.newMovie.overview = form.value.movieOverView;
    this.newMovie.poster_path = environment.defaultImage;
    this.movie.addNewMovie(this.newMovie);
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
