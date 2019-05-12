import { MovieComponent } from "./../movie/movie.component";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class Modal implements OnInit {
  @Input() movieInfo: MovieComponent;

  constructor() { }

  ngOnInit() { }
}
