import { tap, switchMap } from 'rxjs/operators';
import { debounceTime, filter } from 'rxjs/operators';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UiService } from './services/ui.service';
import { ModalService } from './services/modal.service';
import { AddMovieComponent } from './modal/add-movie/add-movie.component';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MovieService } from './stores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('search', { static: false }) search: FormControl;
  value: string = '';

  constructor(
    private movieService: MovieService,
    private modal: MatSnackBar,
    private ui: UiService,
    private dialog: ModalService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.registerValueListener();
  }

  showMovie() {
    if (this.search.value) {
      this.movieService.resetMovies();
      this.search.reset('');
    }
    this.movieService.getMovie().pipe(untilDestroyed(this)).subscribe();
    this.ui.searchFlag = false;
    this.ui.favFlag = false;
  }

  registerValueListener(): void {
    // empty query stream handler, reset the movies when the query is empty.
    this.search.valueChanges
      .pipe(
        filter(value => value.length === 0 || this.search.invalid),
        tap(value => {
          this.movieService.setLoader(true);
          if (value.length === 0 || this.search.invalid) {
            this.movieService.resetMovies();
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();

    // search movies stream handler;
    this.search.valueChanges
      .pipe(
        filter(value => value && value.length >= 2 && this.search.valid),
        tap(() => {
          this.movieService.setLoader(true);
          this.ui.searchFlag = true;
          if (this.search.invalid) {
            this.movieService.resetMovies();
          }
        }),
        debounceTime(3000),
        switchMap(value => this.movieService.searchMovie(value)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  clearValue() {
    this.search.reset('');
    this.movieService.resetMovies();
  }

  resetList() {
    if (this.movieService.getMovies().length >= 1) {
      this.movieService.resetMovies();
      this.modal.open('Movies Cleared!', 'Clear')._dismissAfter(2000);
    } else {
      this.modal.open('No Movies To Cleared!', 'Clear')._dismissAfter(2000);
    }
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

  ngOnDestroy(): void {
  }
}
