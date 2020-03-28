import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Movie } from './movie.model';

export interface MovieState extends EntityState<Movie> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'movie',
  idKey: 'id'
})
export class MovieStore extends EntityStore<MovieState> {

  constructor() {
    super();
  }

}
