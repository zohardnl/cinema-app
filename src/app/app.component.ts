import { ApiService } from "./api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private movie: any = {
    id: this.getID(),
    title: this.api
      .getPostTitle()
      .subscribe(title => (this.movie.title = title)),
    year: 0,
    runtime: "",
    genere: "",
    director: ""
  };

  constructor(private api: ApiService) {}

  // ngOnInit() {
  //   this.api.getPostTitle().subscribe(title => (this.movie.title = title));
  // }

  getID() {
    return Math.floor(Math.random() * 10 + 1);
  }
}
