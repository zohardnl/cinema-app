import {environment} from "./../../environments/environment";
import {MovieServiceService} from "./../services/movie-service.service";
import {ApiService} from "./../services/api.service";
import {Component, OnInit, Input} from "@angular/core";
import {Movie} from "../models/Movie";
import {NgForm} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class Modal implements OnInit {
  @Input() movieInfo: Movie;
  @Input() add: boolean;
  @Input() updatedMovie: Movie;

  //vars for reactive form
  title = new FormControl(this.updatedMovie.title);
  overView = new FormControl(this.updatedMovie.overview);
  releaseDate = new FormControl(this.updatedMovie.release_date);

  constructor(private api: ApiService, private movie: MovieServiceService) {}

  ngOnInit() {}

  onAddMovie(form: NgForm) {
    let newMovie = new Movie();
    newMovie.id = this.api.getId();
    newMovie.title = form.value.movieName;
    newMovie.release_date = form.value.movieReleaseDate;
    newMovie.overview = form.value.movieOverView;
    newMovie.poster_path = environment.defaultImage;
    this.movie.addNewMovie(newMovie);
    form.reset();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  onUpdateMovie(form: NgForm) {}
}
