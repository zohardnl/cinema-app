import { Observable } from "rxjs";
import { MovieServiceService } from "../services/movie-service.service";
import { Movie } from "../models/Movie";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]> = this.movies.movies$;

  constructor(private movies: MovieServiceService) { }

  ngOnInit() { }
}
