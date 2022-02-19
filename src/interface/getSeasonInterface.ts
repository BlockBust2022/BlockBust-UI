export interface getSeasonInterface {
    backdrop_path: string;
    first_air_date: string;
    genres?: (GenresEntity)[] | null;
    id: number;
    name: string;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country?: (string)[] | null;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    imdbId: string;
    seasons?: (SeasonsEntity)[] | null;
  }
  export interface GenresEntity {
    id: number;
    name: string;
  }
  export interface SeasonsEntity {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    episodes?: (EpisodesEntity)[] | null;
  }
  export interface EpisodesEntity {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    season_number: number;
    still_path: string;
    status: string;
  }
  