export interface searchInterface {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface ResultsEntity {
    backdrop_path: string;
    id: number;
    name?: string | null;
    origin_country?: (string)[] | null;
    original_language: string;
    original_name?: string | null;
    poster_path: string;
    original_title?: string | null;
    title?: string | null;
    release_date?: string | null;
    first_air_date?: string | null;
    media_type: string;
  }
  