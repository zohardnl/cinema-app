import {Component, OnInit, EventEmitter, Output, Input} from "@angular/core";
import {ApiService} from "../api.service";
import {Movie} from "../models/Movie";
import {MovieServiceService} from "../movie-service.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  imageUrl: object;
  @Input() movie: Movie;
  @Output() infoMovie = new EventEmitter<Movie>();

  constructor(private api: ApiService, private movieServ: MovieServiceService) {
  }

  ngOnInit() {
    this.imageUrl = this.api.checkMovieImage(this.movie);
  }

  wishList() {
    this.movieServ.setFavoriteMovie(this.movie);
  }

  openInfo() {
    this.infoMovie.emit(this.movie);
  }
}
