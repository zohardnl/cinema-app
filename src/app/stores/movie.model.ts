import { ID } from '@datorama/akita';

export interface Movie {
  id: ID;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

export function createMovie(params: Partial<Movie>) {
  return { ...params } as Movie;
}
