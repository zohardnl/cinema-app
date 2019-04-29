import { Component, OnInit, Injectable, Input, Output } from "@angular/core";
import { ApiService } from "../api.service";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  @Output() imagePic = new EventEmitter<string>();

  movie: any = {
    id: this.getID(),
    title: this.getTitle(),
    year: this.getYear(),
    runtime: this.getRunTime(),
    genre: this.getGenre(),
    director: this.getDirector(),
    poster: this.getPoster()
  };

  constructor(private api: ApiService) {}

  ngOnInit() {}

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

  getPoster() {
    this.api.getMovie().subscribe(res => {
      this.movie.poster = res.Poster;
      this.imagePic.emit(this.movie.poster);
    });
  }
}
