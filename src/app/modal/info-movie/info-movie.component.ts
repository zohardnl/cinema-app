import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Inject } from "@angular/core";
import { Movie } from '../../stores';


@Component({
	selector: "app-info-movie",
	templateUrl: "./info-movie.component.html",
	styleUrls: ["./info-movie.component.scss"]
})
export class InfoMovieComponent implements OnInit {
	movieInfo: Movie;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit() {
		this.movieInfo = this.data.movie;
	}
}
