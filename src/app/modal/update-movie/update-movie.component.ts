import { ModalService } from '../../services/modal.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { trimValue } from '../../validators/trim.validator';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createMovie, Movie, MovieService } from '../../stores';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {
  updateForm: FormGroup;
  updatedMovie: Movie;

  constructor(
    private movieService: MovieService,
    private modal: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.updatedMovie = this.data.movie;
    this.updateForm = new FormGroup({
      title: new FormControl(this.updatedMovie.title.trim(), [
        Validators.required,
        trimValue,
        Validators.pattern('[^\u0590-\u05FF]*')
      ]),
      overView: new FormControl(this.updatedMovie.overview.trim(), [
        Validators.required,
        trimValue,
        Validators.pattern('[^\u0590-\u05FF]*')
      ]),
      releaseDate: new FormControl(this.updatedMovie.release_date, Validators.required)
    });
  }

  onUpdateMovie() {
    let newMovie: Movie = createMovie({});
    newMovie.title = this.updateForm.value.title;
    newMovie.overview = this.updateForm.value.overView;
    newMovie.release_date = this.updateForm.value.releaseDate;
    this.movieService.patchMovie(this.updatedMovie.id, newMovie);
    this.modal.closeDialog();
  }
}
