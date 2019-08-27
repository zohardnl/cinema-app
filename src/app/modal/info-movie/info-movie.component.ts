import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Inject } from "@angular/core";
import { Movie } from "./../../models/Movie";

@Component({
	selector: "app-info-movie",
	templateUrl: "./info-movie.component.html",
	styleUrls: ["./info-movie.component.scss"]
})
export class InfoMovieComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit() {}
}
