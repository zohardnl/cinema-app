import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UiService {
  searchFlag: boolean;
  addMovie: boolean;

  constructor() {}

  scroll(id: number) {
    if (!this.searchFlag) {
      document.querySelector(`#drop${id}`).scrollIntoView({behavior: "smooth"});
    } else {
      document.querySelector("body").scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  addedMovie() {
    this.addMovie = true;
  }
}
