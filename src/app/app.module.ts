import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieComponent } from "./movie/movie.component";
import { Modal } from "./modal/modal.component";
import { ApiService } from "./api.service";
import { SearchMovieComponent } from "./search-movie/search-movie.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MovieServiceService } from "./movie-service.service";
import { MatButtonModule } from "@angular/material/button";
import { DialogMovieComponent } from "./movie/dialog-movie/dialog-movie.component";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    Modal,
    SearchMovieComponent,
    MovieListComponent,
    DialogMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ApiService, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
