import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MovieStore, MovieState } from './movie.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieQuery extends QueryEntity<MovieState> {

  constructor(protected store: MovieStore) {
    super(store);
  }

  loader$: Observable<boolean> = this.selectLoading();
}
