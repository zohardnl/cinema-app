import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieComponent } from "./movie/movie.component";
import { Modal } from "./modal/modal.component";
import { ApiService } from "./api.service";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MovieServiceService } from "./movie-service.service";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FavoriteComponent } from "./favorite/favorite.component";
import { SnackBarComponent } from "./movie/snack-bar/snack-bar.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";
import { CleanStringPipe } from "./movie/clean-string.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    Modal,
    MovieListComponent,
    FavoriteComponent,
    SnackBarComponent,
    CleanStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSnackBarModule,
    CommonModule
  ],
  entryComponents: [SnackBarComponent],
  providers: [ApiService, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
