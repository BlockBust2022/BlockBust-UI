import axios from 'axios';
import { featureMoviesInterface } from '../interface/featureMoviesInterface';
import { getMovieInterface } from '../interface/getMovieInterface';
import { getSearchInterface } from '../interface/getSearchInterface';
import { getTrendigMoviesInterface } from '../interface/getTrendingMoviesInterface';

const baseUrl = 'https://baba-streaming-service.herokuapp.com/';

//search api
export const getSearch = (keyword: string, page?: string | number): Promise<getSearchInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `${baseUrl}search?name=${keyword}&page=${page || 1}`
      );
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

//get movie api
export const getMovie = (id: string | number): Promise<getMovieInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}movie/getMovie/${id}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

// trending api
export const getTrendingMovies = (
  page?: number
): Promise<getTrendigMoviesInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}movie/trendingMovies?page=${page || 1}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

// featured api
export const getFeaturedMovies = (): Promise<featureMoviesInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}featured`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

//get TV series 
export const getTvSeries = (id: string | number): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}tv/getSeason/${id}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

// TV series get episode by season
export const getEpisodeBySeason = (id: string | number, season?: string | number) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}tv/getEpisodes/${id}?season=${season|| 1}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

// Trending TV series
export const getTrendingTvSeries = (
  page?: number
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}tv/trendingTv?page=${page || 1}`);
      resolve(res.data);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

//similar Movies
export const getSimilarMovies = (id: string | number): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}movie/similarMovies/${id}}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

//similar TV series
export const getSimilarTvSeries = (id: string | number): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}tv/similarTv/${id}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}
