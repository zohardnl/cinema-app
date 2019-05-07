import { Component, OnInit, Input } from "@angular/core";
import { MovieComponent } from "./movie/movie.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  movies: MovieComponent[] = [];
  @Input() movieInfo: MovieComponent;

  constructor(private movie: MovieComponent) {
    this.movies.push(movie, movie, movie);
  }

  ngOnInit() {}

  addMovie() {
    this.movies.push(this.movie);
  }

  getInfoMovie(data: MovieComponent) {
    this.movieInfo = data;
  }
}
