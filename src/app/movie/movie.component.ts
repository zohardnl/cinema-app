import { Component, OnInit, Injectable, Input, Output } from "@angular/core";
import { ApiService } from "../api.service";
import { EventEmitter } from "@angular/core";
import { Movie, MovieResponse } from "../models/Movie";
@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  //@Output() image = new EventEmitter<string>();
  url: {};

  movie = new Movie();
  res: MovieResponse;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getMovie().subscribe(movie => {
      this.movie = movie;
      //this.image.emit(this.movie.poster);
      this.url = { background: "url(" + this.movie.poster + ")" };
    });
  }

  getImageUrl() {
    return this.url;
  }
}
