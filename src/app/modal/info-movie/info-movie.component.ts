import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Movie } from './../../models/Movie';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
  movieInfo: Movie;

  constructor(private dialog: ModalService) { }

  ngOnInit() {
    this.movieInfo = this.dialog.movie;
  }

}
