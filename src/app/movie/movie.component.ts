import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ApiService } from "../api.service";
import { Movie } from "../models/Movie";
@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  url: Object;
  movie = new Movie();
  @Output() infoMovie = new EventEmitter<Movie>();

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMovie().subscribe(movie => {
      this.movie = movie;
      this.url = {
        background: `url(https://image.tmdb.org/t/p/w500${
          this.movie.poster_path
        })`
      };
    });
  }

  getImageUrl() {
    return this.url;
  }

  openInfo() {
    this.infoMovie.emit(this.movie);
  }
}
