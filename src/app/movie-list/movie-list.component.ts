import { Movie } from "./../models/Movie";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { MovieComponent } from './../movie/movie.component';

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  moviesFromSearch: Object[] = [];
  movieInfo = new Movie();
  flagMovies: boolean = false;
  flagSearch: boolean = false;
  asValue: boolean = true;
  error: string;
  @ViewChild("movieVal") movieSearchVal: ElementRef;

  constructor(private api: ApiService, private route: Router, private movie: MovieComponent) { }

  ngOnInit() {

  }

  addMovie() {
    // this.movies.push(movie);
    // this.asValue = true;
    // this.flagMovies = true;
    // this.flagSearch = false;
    this.movies.push(this.movie);
  }

  getInfoMovie(data: Movie) {
    this.movieInfo = data;
    this.movies.push(this.movieInfo);
  }

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
    this.clearArray(this.moviesFromSearch);
    this.clearArray(this.movies);
  }

  /************ HELP FUNCTIONS ******************/
  callApi() {
    this.api.searchMovie(this.movieSearchVal).subscribe(movies => {
      if (movies.results.length > 0) {
        this.moviesFromSearch = movies.results;
        this.asValue = true;
        this.flagMovies = false;
        this.flagSearch = true;
        this.clearArray(this.movies);
      } else {
        this.asValue = false;
        this.flagMovies = false;
        this.flagSearch = false;
        this.error = "No Results!";
      }
    });
  }

  noValue() {
    this.asValue = false;
    this.flagSearch = false;
    this.flagMovies = false;
    this.error = "No value for search!";
    this.clearArray(this.movies);
  }

  clearArray(arr: any[]) {
    arr.splice(0);
  }

  checkVal(val: any) {
    if (val !== "" && val !== null && val !== undefined) return true;
    else return false;
  }

  navigate(link: string) {
    this.api.navigatePages(link);
  }
}
