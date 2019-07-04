import { Observable } from "rxjs";
import { MovieServiceService } from "./../movie-service.service";
import { Movie } from "./../models/Movie";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]> = this.movies.movies$;
  moviesFromSearch$: Observable<Movie[]> = this.movies.movies2$;
  movieInfo: Movie;
  flagSearch: boolean = false;
  asValue: boolean = true;
  error: string;

  constructor(private movies: MovieServiceService) {}

  ngOnInit() {}

  getInfoMovie(data: Movie) {
    this.movieInfo = data;
  }

  flagMovies() {}

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
}
