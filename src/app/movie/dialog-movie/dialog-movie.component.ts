import { Component } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

export interface DialogData {
  text: string;
  name: string;
}

@Component({
  selector: "app-dialog-movie",
  templateUrl: "./dialog-movie.component.html",
  styleUrls: ["./dialog-movie.component.scss"]
})
export class DialogMovieComponent {
  text: string = "hellow word";
  name: string = "daniel zohar";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMovieComponent, {
      width: "250px",
      data: { name: this.name, text: this.text }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.text = result;
    });
  }
}
