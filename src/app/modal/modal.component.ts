import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MovieComponent } from "../movie/movie.component";
import { Movie } from '../models/Movie';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class Modal implements OnInit {
  movieInfo: MovieComponent;

  constructor() { }

  ngOnInit() { }
}
