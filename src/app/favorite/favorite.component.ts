import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../api.service";
import {Movie} from "../models/Movie";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  imageUrl: object;
  @Input() movie: Movie;
  @Output() infoMovie = new EventEmitter<Movie>();

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  getImageUrl() {
    return (this.imageUrl = this.api.checkMovieImage(this.movie));
  }

  openInfo() {
    this.infoMovie.emit(this.movie);
  }
}
