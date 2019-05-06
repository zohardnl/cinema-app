import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieComponent } from "./movie/movie.component";
import { Modal } from "./modal/modal.component";
import { Movie } from './models/Movie';

@NgModule({
  declarations: [AppComponent, MovieComponent, Modal],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MovieComponent, Modal, Movie],
  bootstrap: [AppComponent]
})
export class AppModule { }
