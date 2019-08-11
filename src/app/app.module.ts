import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {MovieComponent} from "./movie/movie.component";
import {ApiService} from "./services/api.service";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MovieServiceService} from "./services/movie-service.service";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FavoriteComponent} from "./favorite/favorite.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {CleanStringPipe} from "./movie/clean-string.pipe";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {InfoMovieComponent} from "./modal/info-movie/info-movie.component";
import {AddMovieComponent} from "./modal/add-movie/add-movie.component";
import {UpdateMovieComponent} from "./modal/update-movie/update-movie.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    FavoriteComponent,
    CleanStringPipe,
    InfoMovieComponent,
    AddMovieComponent,
    UpdateMovieComponent
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
    CommonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [InfoMovieComponent, AddMovieComponent, UpdateMovieComponent],
  providers: [ApiService, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
