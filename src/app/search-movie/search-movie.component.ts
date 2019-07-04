import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import { Output } from "@angular/core";
import { ApiService } from "./../api.service";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"]
})
export class SearchMovieComponent implements OnInit {
  url: any;
  @Input() movie: any;
  @Output() SearchMovie = new EventEmitter<any>();

  constructor(private api: ApiService) {}

  ngOnInit() {}

  getImageUrl() {
    return (this.url = this.api.checkMovieImage(this.movie));
  }

  openInfo() {
    this.SearchMovie.emit(this.movie);
  }
}
