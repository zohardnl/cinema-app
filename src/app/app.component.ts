import { MovieServiceService } from "./movie-service.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("movieVal", { static: false }) movieSearchVal: ElementRef;
  value: string = "";

  constructor(private movie: MovieServiceService, private modal: MatSnackBar) { }

  ngOnInit() { }

  addMovie() {
    this.movie.getMovie().subscribe();
  }

  onKeyPress() {
    this.value = this.movieSearchVal.nativeElement.value;
    this.movie.getSearch(this.movieSearchVal).subscribe(movies => {
      if (movies.length < 1)
        this.modal.open("No results for this search!")._dismissAfter(2000);
    });
  }

  clearValue() {
    this.value = "";
    this.movieSearchVal.nativeElement.value = "";
  }

  resetList() {
    this.movie.resetMovies();
  }
}
