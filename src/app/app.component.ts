import { Component, Input } from "@angular/core";
import { MovieComponent } from "./movie/movie.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  movies = [];
  movieitem: MovieComponent;

  constructor(private movie: MovieComponent) {
    this.movieitem = movie;
  }

  addMovie() {
    this.movies.push(this.movieitem);
  }
}
