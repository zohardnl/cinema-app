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
  movies: any[] = [];
  moviesFromSearch: movieStar[] = [];
  movieInfo: MovieComponent;
  mvMdb = new movieStar();
  @ViewChild("movieVal") movieSearchVal: ElementRef;

  constructor(private movie: MovieComponent, private api: ApiService) {}

  ngOnInit() {}

  addMovie() {
    this.movies.push(this.movieInfo);
  }

  getInfoMovie(data: MovieComponent) {
    this.movieInfo = data;
  }

  getMovieSearch(el: any) {
    let val = el.nativeElement.value;
    if (val !== "" && val !== null && val !== undefined) {
      this.movieSearchVal = el;
      this.api.searchMovie(this.movieSearchVal).subscribe(movie => {
        this.mvMdb = movie;
        this.moviesFromSearch.push(this.mvMdb);
      });
    }
  }
}
