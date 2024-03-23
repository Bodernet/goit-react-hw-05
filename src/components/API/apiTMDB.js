import axios from "axios";

// const getMovie = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//    headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTRkNjc1ZTliZmVhYTU5MzExNzI0ZTFiOTRlODAwNSIsInN1YiI6IjY1ZmFkMmEyMGJjNTI5MDE2MmFkZmNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TlQXXUa7zQbE4YZMOoxDTVGFLKjBH3r0rnmNZwIuh_g",
//     accept: "application/json",
//   },
// });

const BASE_URL = "https://api.themoviedb.org/3/";

const authorization = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTRkNjc1ZTliZmVhYTU5MzExNzI0ZTFiOTRlODAwNSIsInN1YiI6IjY1ZmFkMmEyMGJjNTI5MDE2MmFkZmNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TlQXXUa7zQbE4YZMOoxDTVGFLKjBH3r0rnmNZwIuh_g",
  },
};

const params = {
  language: "en-US",
  include_adult: false,
  page: 1,
};

const getMovie = async () => {
  const dataUrl = `${BASE_URL}trending/movie/day?${params}`;
  const { data } = await axios.get(dataUrl, authorization);
  return data;
};

const getMovieQuery = async (searchQuery) => {
  const queryUrl = `${BASE_URL}search/movie?query=${searchQuery}&${params}`;
  const { data } = await axios.get(queryUrl, authorization);
  return data;
};
const getMoviesById = async (movieId) => {
  const idUrl = `${BASE_URL}movie/${movieId}${params}`;
  const { data } = await axios.get(idUrl, authorization);
  return data;
};

export { getMovie, getMovieQuery, getMoviesById };
