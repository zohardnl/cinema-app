import { MovieServiceService } from "./services/movie-service.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UiService } from "./services/ui.service";
import { ModalService } from "./services/modal.service";
import { AddMovieComponent } from "./modal/add-movie/add-movie.component";
import { FormControl } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	@ViewChild("search", { static: false }) search: FormControl;
	value: string = "";

	constructor(
		private movieService: MovieServiceService,
		private modal: MatSnackBar,
		private ui: UiService,
		private dialog: ModalService
	) {}

	ngOnInit() {}

	showMovie() {
		this.movieService.getMovie().subscribe();
		this.ui.searchFlag = false;
		this.ui.favFlag = false;
	}

	onKeyPress() {
		this.ui.searchFlag = true;
		this.value = this.search.value;
		if (this.search.valid) {
			this.movieService.getSearch(this.value).subscribe(movies => {
				if (movies.length < 1) this.modal.open("No results for this search!", "Search")._dismissAfter(2000);
			});
		} else {
			this.movieService.resetMovies();
		}
	}

	clearValue() {
		this.value = "";
		this.search.reset();
		this.movieService.resetMovies();
	}

	resetList() {
		this.movieService.resetMovies();
		this.modal.open("Movies Cleared!", "Clear")._dismissAfter(2000);
	}

	viewUp() {
		document.querySelector(".main-movies").scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	addMovie() {
		this.ui.searchFlag = false;
		this.ui.favFlag = false;
		this.dialog.openDialog(AddMovieComponent);
	}

	getFav() {
		this.ui.favFlag = true;
	}
}
