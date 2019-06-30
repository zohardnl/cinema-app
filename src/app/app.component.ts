import { Component, OnInit } from "@angular/core";
import { Movie } from './models/Movie';
import { ApiService } from './api.service';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  // movies: Movie[] = [];
  // moviesFromSearch: Object[] = [];
  // movieInfo = new Movie();
  // flagMovies: boolean = false;
  // flagSearch: boolean = false;
  // asValue: boolean = true;
  // error: string;
  // @ViewChild("movieVal") movieSearchVal: ElementRef;

  constructor(private api: ApiService, private list: MovieListComponent) { }

  ngOnInit() { }

  addMovie() {
    // this.movies.push(this.movieInfo);
    // this.asValue = true;
    // this.flagMovies = true;
    // this.flagSearch = false;
    this.list.addMovie();
  }

  // getInfoMovie(data: Movie) {
  //   this.movieInfo = data;
  // }

  // getMovieSearch(el: any) {
  //   let val = el.nativeElement.value.trim();
  //   if (this.checkVal(val)) {
  //     this.callApi();
  //   } else {
  //     this.noValue();
  //   }
  // }

  // sendInfoMovie(modalMovie: any) {
  //   this.movieInfo = modalMovie;
  // }

  // onKeyPress() {
  //   this.callApi();
  // }

  resetList() {
    this.list.resetList();
  }

  // /************ HELP FUNCTIONS ******************/
  // callApi() {
  //   this.api.searchMovie(this.movieSearchVal).subscribe(movies => {
  //     if (movies.results.length > 0) {
  //       this.moviesFromSearch = movies.results;
  //       this.asValue = true;
  //       this.flagMovies = false;
  //       this.flagSearch = true;
  //       this.clearArray(this.movies);
  //     } else {
  //       this.asValue = false;
  //       this.flagMovies = false;
  //       this.flagSearch = false;
  //       this.error = "No Results!";
  //     }
  //   });
  // }

  // noValue() {
  //   this.asValue = false;
  //   this.flagSearch = false;
  //   this.flagMovies = false;
  //   this.error = "No value for search!";
  //   this.clearArray(this.movies);
  // }

  // clearArray(arr: any[]) {
  //   arr.splice(0);
  // }

  // checkVal(val: any) {
  //   if (val !== "" && val !== null && val !== undefined) return true;
  //   else return false;
  // }

  navigate(link: string) {
    this.api.navigatePages(link);
  }
}
