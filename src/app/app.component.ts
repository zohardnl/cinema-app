import { ApiService } from "./api.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private movie: any = {
    id: this.getID(),
    title: this.getTitle(),
    year: this.getYear(),
    runtime: this.getRunTime(),
    genre: this.getGenre(),
    director: this.getDirector()
  };

  constructor(private api: ApiService) { }

  getID() {
    return Math.floor(Math.random() * 1000 + 1);
  }

  getTitle() {
    this.api.getMovie().subscribe(res => {
      this.movie.title = res.Title;
    });
  }

  getYear() {
    this.api.getMovie().subscribe(res => {
      this.movie.year = res.Year;
    });
  }

  getRunTime() {
    this.api.getMovie().subscribe(res => {
      this.movie.runtime = res.Runtime;
    });
  }

  getGenre() {
    this.api.getMovie().subscribe(res => {
      this.movie.genre = res.Genre;
    });
  }

  getDirector() {
    this.api.getMovie().subscribe(res => {
      this.movie.director = res.Director;
    });
  }
}
