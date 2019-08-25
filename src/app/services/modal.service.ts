import { Injectable } from "@angular/core";
import { Movie } from "./../models/Movie";
import { OpenModalService } from "./open-modal.service";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  movie: Movie;

  constructor(private openModal: OpenModalService) {}

  close() {
    this.openModal.dialogRef.close();
  }

  openDialogInfo() {
    this.openModal.infoDialog();
  }

  openDialogUpdate() {
    this.openModal.updateDialog();
  }

  openDialogAddMovie() {
    this.openModal.addDialog();
  }

  openDialogRemoveMovie() {
    this.openModal.removeDialog();
  }
}
