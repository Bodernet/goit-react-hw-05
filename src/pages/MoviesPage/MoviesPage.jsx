import { useEffect, useState } from "react";
import { getMovieQuery } from "../../components/API/apiTMDB";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import MessageError from "../../components/MessageError/MessageError";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovieQuery() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getMovieQuery(searchQuery);
        setMovies(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieQuery();
  }, [searchQuery]);

  const onSetSearchQuery = (query) => {
    setMovies([]);
    setSearchParams({ query: query });
  };

  return (
    <div>
      <h2>Find movies</h2>
      <SearchForm
        searchQuery={searchQuery}
        onSetSearchQuery={onSetSearchQuery}
      />
      {isLoading && <Loader />}
      {isError && <MessageError />}
      {!isError && !isLoading && movies.length > 0 && (
        <div>
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
