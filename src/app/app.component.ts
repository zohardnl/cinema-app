import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MovieComponent } from "./movie/movie.component";
import { Movie } from "./models/Movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];
  moviesFromSearch: Movie[] = [];

  movieInfo = new Movie();
  mvMdb = new Movie();

  flag: boolean = false;
  asValue: boolean = true;

  @ViewChild("movieVal") movieSearchVal: ElementRef;

  constructor() {}

  ngOnInit() {}

  addMovie() {
    this.movies.push(this.movieInfo);
    this.flag = true;
  }

  getInfoMovie(data: Movie) {
    this.movieInfo = data;
  }

  getMovieSearch(el: any) {
    let val = el.nativeElement.value.trim();
    if (val !== "" && val !== null && val !== undefined) {
      this.asValue = true;
      this.movies.splice(0);
      this.moviesFromSearch.push(this.mvMdb);
    } else {
      this.asValue = false;
      alert("Please enter a value for search!");
    }
  }

  getSearch(dataSearch: Movie) {
    this.mvMdb = dataSearch;
  }
}
