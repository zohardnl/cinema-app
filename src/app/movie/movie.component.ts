import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ApiService } from "../api.service";
import { Movie } from "../models/Movie";
@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  imageUrl: Object;
  @Input() movie: Movie;
  @Output() infoMovie = new EventEmitter<Movie>();

  constructor(private api: ApiService) {}

  ngOnInit() {}

  getImageUrl() {
    return (this.imageUrl = this.api.checkMovieImage(this.movie));
  }

  openInfo() {
    this.infoMovie.emit(this.movie);
  }
}
