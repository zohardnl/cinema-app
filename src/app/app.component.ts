import { distinctUntilChanged, tap, switchMap } from "rxjs/operators";
import { debounceTime, filter } from "rxjs/operators";
import { MovieServiceService } from "./services/movie-service.service";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
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
export class AppComponent implements OnInit, AfterViewInit {
	@ViewChild("search", { static: false }) search: FormControl;
	value: string = "";

	constructor(
		private movieService: MovieServiceService,
		private modal: MatSnackBar,
		private ui: UiService,
		private dialog: ModalService
	) {}

	ngOnInit() {}

	ngAfterViewInit(): void {
		this.registerValueListener();
	}

	showMovie() {
		this.movieService.getMovie().subscribe();
		this.ui.searchFlag = false;
		this.ui.favFlag = false;
	}

	registerValueListener(): void {
		// empty query stream handler, reset the movies when the query is empty.
		this.search.valueChanges
			.pipe(
				debounceTime(500),
				filter(value => value.trim().length === 0 && this.search.valid),
				tap(value => {
					if (value.length === 0) {
						this.movieService.resetMovies();
					}
				})
			)
			.subscribe();

		// search movies stream handler;
		this.search.valueChanges
			.pipe(
				debounceTime(500),
				tap(() => {
					this.ui.searchFlag = true;
					if (this.search.invalid) this.movieService.resetMovies();
				}),
				filter(value => value.trim() && value.length >= 1 && this.search.valid),
				distinctUntilChanged(),
				switchMap(value => this.movieService.searchMovie(value))
			)
			.subscribe();
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
