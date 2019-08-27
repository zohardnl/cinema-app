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
      requestAnimationFrame(() => {
        document.querySelector(`#drop${id}`).scrollIntoView({ behavior: "smooth" });
      });
    } else {
      document.querySelector(".main-movies").scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
