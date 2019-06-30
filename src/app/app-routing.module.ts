import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieComponent } from "./movie/movie.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: MovieListComponent },
  { path: "favorites", component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
