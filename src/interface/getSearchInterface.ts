export interface getSearchInterface {
  page: number;
  results?: ResultsEntity[] | null | string;
  total_pages: number;
  total_results: number;
}
export interface ResultsEntity {
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  original_title: string;
  title: string;
  release_date: string;
}
