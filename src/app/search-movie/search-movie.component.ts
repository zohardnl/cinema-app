import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import { Output } from "@angular/core";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"]
})
export class SearchMovieComponent implements OnInit {
  url: any;
  @Input() movie: any;
  @Output() SearchMovie = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  getImageUrl() {
    if (this.movie.poster_path !== undefined && this.movie.poster_path !== "" && this.movie.poster_path !== null) {
      this.url = {
        background: `url(https://image.tmdb.org/t/p/w500${this.movie.poster_path})`
      };
    } else {
      this.url = { background: `url(https://content.schoolinsites.com/api/documents/ebbca81b01694c91aa908f5374842a9f.gif)` };
    }
    return this.url;
  }
}
