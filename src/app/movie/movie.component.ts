import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ApiService } from "../api.service";
import { Movie } from "../models/Movie";
@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  url: Object;
  @Input() movie = new Movie();
  @Output() infoMovie = new EventEmitter<Movie>();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getMovie().subscribe(movie => {
      this.movie = movie;
      this.url = this.api.checkMovieImage(this.movie);
    });
  }

  getImageUrl() {
    return this.url;
  }

  openInfo() {
    this.infoMovie.emit(this.movie);
  }
}
