import axios from "axios";

const theMovieDbAuthorization = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTRkNjc1ZTliZmVhYTU5MzExNzI0ZTFiOTRlODAwNSIsInN1YiI6IjY1ZmFkMmEyMGJjNTI5MDE2MmFkZmNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TlQXXUa7zQbE4YZMOoxDTVGFLKjBH3r0rnmNZwIuh_g",
    accept: "application/json",
  },
});

export default theMovieDbAuthorization;
