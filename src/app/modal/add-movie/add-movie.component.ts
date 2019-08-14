import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Movie} from "src/app/models/Movie";
import {ApiService} from "./../../services/api.service";
import {MovieServiceService} from "src/app/services/movie-service.service";
import {environment} from "./../../../environments/environment";
import {ModalService} from "src/app/services/modal.service";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"]
})
export class AddMovieComponent implements OnInit {
  @ViewChild("infoForm", {static: false}) formInfo: NgForm;

  constructor(private api: ApiService, private movie: MovieServiceService, private modal: ModalService) {}

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
    this.modal.close();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  checkValues() {
    let validName = this.formInfo.value.movieName.trim();
    let validDate = this.formInfo.value.movieReleaseDate.trim();
    let validOverView = this.formInfo.value.movieOverView.trim();

    if (this.checkTrim(validName) && this.checkTrim(validDate) && this.checkTrim(validOverView)) {
      return true;
    } else {
      return false;
    }
  }

  checkTrim(val: string) {
    if (val !== null && val !== undefined && val !== "") {
      return true;
    } else {
      return false;
    }
  }
}
