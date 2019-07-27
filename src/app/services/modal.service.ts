import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoMovieComponent } from '../modal/info-movie/info-movie.component';
import { UpdateMovieComponent } from '../modal/update-movie/update-movie.component';
import { Movie } from './../models/Movie';
import { AddMovieComponent } from '../modal/add-movie/add-movie.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    movie: Movie;
    dialogRef: MatDialogRef<any>;

    constructor(private dialog: MatDialog) { }

    openDialogInfo() {
        this.dialog.open(InfoMovieComponent);
    }

    openDialogUpdate() {
        this.dialogRef = this.dialog.open(UpdateMovieComponent, {
            width: '800px'
        });
    }

    openDialogAddMovie() {
        this.dialogRef = this.dialog.open(AddMovieComponent, {
            width: '800px'
        });
    }
}
