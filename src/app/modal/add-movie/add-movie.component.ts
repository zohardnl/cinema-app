import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { ApiService } from './../../services/api.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { environment } from './../../../environments/environment';
import { ModalService } from 'src/app/services/modal.service';
import { UiService } from './../../services/ui.service';

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

    constructor(private api: ApiService, private movie: MovieServiceService, private modal: ModalService, private ui: UiService) { }

    ngOnInit() {
    }

    onAddMovie(form: NgForm) {
        let newMovie = new Movie();
        newMovie.id = this.api.getId();
        newMovie.title = form.value.movieName;
        newMovie.release_date = form.value.movieReleaseDate;
        newMovie.overview = form.value.movieOverView;
        newMovie.poster_path = environment.defaultImage;
        this.movie.addNewMovie(newMovie);
        form.reset();
        setTimeout(() => {
            this.modal.dialogRef.close();
        }, 1000);
    }

    resetForm(form: NgForm) {
        form.reset();
    }
}
