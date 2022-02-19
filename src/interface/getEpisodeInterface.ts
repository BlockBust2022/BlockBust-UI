export interface getEpisodeInterface {
    air_date: string;
    episodes?: (EpisodesEntity)[] | null;
    name: string;
    overview: string;
    id: number;
    poster_path: string;
    season_number: number;
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
  