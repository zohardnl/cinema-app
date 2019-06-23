import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { MovieComponent } from "./movie/movie.component";
import { ApiService } from "./api.service";
import { movieStar } from "./models/Movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  movies: MovieComponent[] = [];
  flag: boolean = false;
  moviesFromSearch: movieStar[] = [];
  movieInfo: MovieComponent;
  mvMdb = new movieStar();
  asValue: boolean = true;
  @ViewChild("movieVal") movieSearchVal: ElementRef;

  constructor(private movie: MovieComponent, private api: ApiService) { }

  ngOnInit() { }

  addMovie() {
    this.movies.push(this.movieInfo);
    this.flag = true;
  }

  getInfoMovie(data: MovieComponent) {
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

  getSearch(dataSearch: movieStar) {
    this.mvMdb = dataSearch;
  }
}
