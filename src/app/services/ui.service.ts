import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UiService {
  searchFlag: boolean;
  favFlag: boolean;

  constructor() {}

  scroll(id: number) {
    if (!this.searchFlag && !this.favFlag) {
      setTimeout(() => {
        document.querySelector(`#drop${id}`).scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(".main-movies").scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
