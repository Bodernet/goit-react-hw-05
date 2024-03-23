import { useEffect, useState } from "react";

import { getMovieQuery } from "../components/API/apiTMDB";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovieQuery() {
      try {
        // setIsError(false);
        // setIsLoading(true);
        const data = await getMovieQuery(searchQuery);
        setMovies((prevList) => [...prevList, ...data.results]);
        // if (data.results.length === 0) {
        //   noquery();
        //   return;
        // }
      } catch (err) {
        // setIsError(true);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchMovieQuery();
  }, [searchQuery]);

  const onSetSearchQuery = (query) => {
    // if (searchTerm.trim().length === 0) {
    //   notify();
    //   return;
    // }
    setMovies([]);
    setSearchQuery(query);
  };

  return (
    <div>
      <h2>Find movies</h2>
      <SearchForm
        searchQuery={searchQuery}
        onSetSearchQuery={onSetSearchQuery}
      />

      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MoviesPage;
