import { MovieServiceService } from "./movie-service.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("movieVal", { static: false }) movieSearchVal: ElementRef;
  value: string = "";

  constructor(private movie: MovieServiceService) {}

  ngOnInit() {}

  addMovie() {
    this.movie.getMovie().subscribe();
  }

  onKeyPress() {
    this.value = this.movieSearchVal.nativeElement.value;
    this.movie.getSearch(this.movieSearchVal).subscribe();
  }

  clearValue() {
    this.value = "";
    this.movieSearchVal.nativeElement.value = "";
  }

  resetList() {
    this.movie.resetMovies();
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

  // navigate(link: string) {
  //   this.api.navigatePages(link);
  // }
}
