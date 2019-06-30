import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieComponent } from "./movie/movie.component";
import { Modal } from "./modal/modal.component";
import { Movie } from "./models/Movie";
import { ApiService } from "./api.service";
import { SearchMovieComponent } from "./search-movie/search-movie.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    Modal,
    SearchMovieComponent,
    MovieListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MovieComponent, Modal, Movie, ApiService, MovieListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
