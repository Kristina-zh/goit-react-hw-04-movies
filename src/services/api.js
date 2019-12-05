import axios from 'axios';

const key = '2964dee6f9b3937b53e885a7fa2424ff';

export const popularMovies = () =>
  axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);

export const searchMovies = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`,
  );

export const searchExactMovies = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos,images`,
  );

export const getCredits = id =>
  axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`);

export const getReviews = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
