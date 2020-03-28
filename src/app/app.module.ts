import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {MovieComponent} from "./movie/movie.component";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FavoriteComponent} from "./favorite/favorite.component";
import {CommonModule} from "@angular/common";
import {CleanStringPipe} from "./movie/clean-string.pipe";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {InfoMovieComponent} from "./modal/info-movie/info-movie.component";
import {AddMovieComponent} from "./modal/add-movie/add-movie.component";
import {UpdateMovieComponent} from "./modal/update-movie/update-movie.component";
import {RemoveMovieComponent} from "./modal/remove-movie/remove-movie.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {
  MatButtonModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDialogModule
} from "@angular/material";
import {PaginatorComponent} from './paginator/paginator.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    FavoriteComponent,
    CleanStringPipe,
    InfoMovieComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    RemoveMovieComponent,
    PaginatorComponent
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
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  entryComponents: [InfoMovieComponent, AddMovieComponent, UpdateMovieComponent, RemoveMovieComponent],
  providers: [{
    provide: MatPaginatorIntl, useClass: PaginatorComponent
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
