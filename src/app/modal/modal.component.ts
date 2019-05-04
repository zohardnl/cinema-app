import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class Modal implements OnInit {

  info: MovieComponent;

  constructor(private movieInfo: MovieComponent) {
    this.info = this.movieInfo;
  }

  ngOnInit() {

  }

}
