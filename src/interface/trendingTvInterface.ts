export interface trendingTvInterface {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface ResultsEntity {
    backdrop_path: string;
    first_air_date: string;
    id: number;
    name: string;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country?: (string)[] | null;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
  }
  