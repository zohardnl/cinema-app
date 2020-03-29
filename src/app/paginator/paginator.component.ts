import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MovieService, Movie } from '../stores';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent extends MatPaginatorIntl implements OnInit, OnDestroy {
  @Input() search: string;
  allMovies: number;
  pageIndex: number = 0;

  nextPageLabel = 'Next';
  previousPageLabel = 'Back';
  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 Movies of ${length} Results`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} – ${endIndex} Movies of ${length} Results`;
  };

  constructor(private movieService: MovieService) {
    super();
  }


  ngOnInit() {
    this.movieService.getAllData().pipe(untilDestroyed(this))
      .subscribe((res: number) => {
        this.allMovies = res;
        this.getRangeLabel(this.pageIndex, 20, res);
      });
  }

  setPageIndex(data) {
    this.pageIndex = data.pageIndex;
    this.getListOfMovies(this.pageIndex);
  }

  getListOfMovies(index: number) {
    this.movieService.setLoader(true);
    this.movieService.searchMovie(this.search, index + 1).pipe(untilDestroyed(this))
      .subscribe();
  }

  ngOnDestroy(): void {
  }
}
