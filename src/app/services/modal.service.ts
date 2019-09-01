import { Movie } from "./../models/Movie";
import { MatDialogRef } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";
import { Injectable } from "@angular/core";
import { ComponentType } from "@angular/cdk/portal";

@Injectable({
	providedIn: "root"
})
export class ModalService {
	dialogRef: MatDialogRef<any>;

	constructor(private dialog: MatDialog) {}

	openDialog(component: ComponentType<any>, movie?: Movie, width: string = "40em", maxHeight: string = "95vh") {
		this.dialogRef = this.dialog.open(component, {
			width,
			maxHeight,
			data: {
				movie
			}
		});
	}

	closeDialog() {
		this.dialogRef.close();
	}
}
