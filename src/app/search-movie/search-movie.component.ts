import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import { Output } from "@angular/core";
import { ApiService } from "./../api.service";
import { ElementRef } from "@angular/core";
import { Movie } from "../models/Movie";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"]
})
export class SearchMovieComponent implements OnInit {
  movie = new Movie();
  url: Object;
  @Input() element: ElementRef;
  @Output() SearchMovie = new EventEmitter<Movie>();

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.searchMovie(this.element).subscribe(movieRes => {
      this.movie = movieRes;
      this.url = {
        background: `url(https://image.tmdb.org/t/p/w500${
          this.movie.poster_path
        })`
      };
      this.SearchMovie.emit(this.movie);
    });
  }

  getImageUrl() {
    return this.url;
  }
}
