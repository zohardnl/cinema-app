import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MovieComponent } from "./movie/movie.component";
import { ApiService } from "./api.service";
import { movieStar } from "./models/Movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  movies: any[] = [];
  movieInfo: MovieComponent;
  @ViewChild("movieVal") movieSearchVal: ElementRef;
  mvMdb = new movieStar();

  constructor(private movie: MovieComponent, private api: ApiService) {}

  ngOnInit() {}

  addMovie() {
    this.movies.push(this.movie);
  }

  getInfoMovie(data: MovieComponent) {
    this.movieInfo = data;
  }

  getMovieSearch() {
    this.api.searchMovieMdb(this.movieSearchVal).subscribe(movie => {
      this.mvMdb = movie;
    });
    console.log(this.mvMdb.id + " " + this.mvMdb.name);
  }
}
