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
}
