export class Movie {
  id: number;
  title: string;
  year: number;
  runtime: string;
  genre: string;
  director: string;
  poster: string;
}

export interface MovieResponse {
  Title: string;
  Poster: string;
  Year: string;
  Director: string;
  Genre: string;
  Runtime: string;
}

export class movieStar {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}
