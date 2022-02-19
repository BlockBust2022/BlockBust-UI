export interface movieInterface {
  adult: boolean;
  backdrop_path: string;
  genres?: (GenresEntity)[] | null;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  url?: (string)[] | null;
}
export interface GenresEntity {
  id: number;
  name: string;
}
