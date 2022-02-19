export interface similarTvInterface {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface ResultsEntity {
    backdrop_path: string;
    id: number;
    name: string;
    origin_country?: (string)[] | null;
    original_language: string;
    original_name: string;
    poster_path: string;
    first_air_date: string;
  }
  