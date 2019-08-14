import { AddMovieComponent } from './../modal/add-movie/add-movie.component';
import { InfoMovieComponent } from './../modal/info-movie/info-movie.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateMovieComponent } from '../modal/update-movie/update-movie.component';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  dialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  infoDialog(){
    this.dialog.open(InfoMovieComponent, {
      width: "40em"
    });
  }

  updateDialog(){
    this.dialogRef = this.dialog.open(UpdateMovieComponent, {
      width: "40em"
    });
  }

  addDialog(){
    this.dialogRef = this.dialog.open(AddMovieComponent, {
      width: "40em"
    });
  }
}
