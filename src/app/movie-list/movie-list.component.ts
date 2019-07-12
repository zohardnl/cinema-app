import { Observable } from "rxjs";
import { MovieServiceService } from "../services/movie-service.service";
import { Movie } from "../models/Movie";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]> = this.movies.movies$;
  movieInfo: Movie;
  @ViewChild("navmovie", { static: false }) scrollMovie: ElementRef;


  constructor(private movies: MovieServiceService) {

  }

  ngOnInit() {
  }

  nav() {
    this.scrollMovie.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  getInfoMovie(data: Movie) {
    this.movieInfo = data;
  }
}
