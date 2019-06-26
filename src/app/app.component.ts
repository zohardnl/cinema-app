import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Movie } from "./models/Movie";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];
  moviesFromSearch: Object[] = [];
  movieInfo = new Movie();
  flag: boolean = false;
  asValue: boolean = true;
  asResults: boolean = true;
  @ViewChild("movieVal") movieSearchVal: ElementRef;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  addMovie() {
    this.clearArray(this.moviesFromSearch);
    this.movies.push(this.movieInfo);
    this.asResults = true;
    this.flag = true;
  }

  getInfoMovie(data: Movie) {
    this.movieInfo = data;
  }

  getMovieSearch(el: any) {
    let val = el.nativeElement.value.trim();
    if (this.checkVal(val)) {
      this.asValue = true;
      this.api.searchMovie(this.movieSearchVal).subscribe(movies => {
        if (movies.results.length > 0) {
          this.clearArray(this.movies);
          this.moviesFromSearch = movies.results;
          this.asResults = true;
          this.flag = false;
        } else {
          this.clearArray(this.moviesFromSearch);
          this.asResults = false;
        }
      });
    } else {
      this.asValue = false;
      alert("Please enter a value for search!");
    }
  }

  sendInfoMovie(modalMovie: any) {
    this.movieInfo = modalMovie;
  }

  //HELP FUNCTIONS
  clearArray(arr: any[]) {
    arr.splice(0);
  }

  checkVal(val: any) {
    if (val !== "" && val !== null && val !== undefined) return true;
    else return false;
  }
}
