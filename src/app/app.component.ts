import { MovieServiceService } from './services/movie-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UiService } from './services/ui.service';
import { ModalService } from './services/modal.service';
import { AddMovieComponent } from './modal/add-movie/add-movie.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild('movieVal', { static: false }) movieSearchVal: ElementRef;
	value: string = '';

	constructor(
		private movie: MovieServiceService,
		private modal: MatSnackBar,
		private ui: UiService,
		private dialog: ModalService
	) {}

	ngOnInit() {}

	showMovie() {
		this.movie.getMovie().subscribe();
		this.ui.searchFlag = false;
		this.ui.favFlag = false;
	}

	onKeyPress() {
		this.ui.searchFlag = true;
		this.value = this.movieSearchVal.nativeElement.value.trim();
		this.movie.getSearch(this.movieSearchVal).subscribe(movies => {
			if (movies.length < 1) this.modal.open('No results for this search!', 'Search')._dismissAfter(2000);
		});
	}

	clearValue() {
		this.value = '';
		this.movieSearchVal.nativeElement.value = '';
	}

	resetList() {
		this.movie.resetMovies();
		this.modal.open('Movies Cleared!', 'Clear')._dismissAfter(2000);
	}

	viewUp() {
		document.querySelector('.main-movies').scrollTo({
			top: 0,
			behavior: 'smooth'
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
