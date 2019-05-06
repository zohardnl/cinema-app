import { Movie } from "./models/Movie";
import { Component, OnInit } from "@angular/core";
import { MovieComponent } from "./movie/movie.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  movies: MovieComponent[] = [];

  constructor(private movie: MovieComponent) {
    this.movies.push(movie, movie, movie);
  }

  ngOnInit() { }

  addMovie() {
    this.movies.push(this.movie);
  }
}
