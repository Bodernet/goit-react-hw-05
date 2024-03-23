import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieQuery } from "../components/API/apiTMDB";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchMovieQuery() {
      try {
        // setIsError(false);
        // setIsLoading(true);
        const data = await getMovieQuery(searchQuery);

        // if (data.results.length === 0) {
        //   noquery();
        //   return;
        // }

        setMovies(data.results);
      } catch (err) {
        // setIsError(true);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchMovieQuery();
  }, [searchQuery]);

  const onSetSearchQuery = (searchTerm) => {
    // if (searchTerm.trim().length === 0) {
    //   notify();
    //   return;
    // }
    setSearchParams({ query: searchTerm });
  };

  return (
    <div>
      <h2>Find movies</h2>
      <SearchForm
        searchQuery={searchQuery}
        onSetSearchQuery={onSetSearchQuery}
      />
      {/* {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {!isError && !isLoading && movies.length > 0 && ( */}
      <div>
        <MovieList movies={movies} />
      </div>
      {/* )} */}
      {/* <Toaster
        toastOptions={{
          style: {
            background: "#ffff00",
            color: "#008000",
          },
        }}
      /> */}
    </div>
  );
};

export default MoviesPage;
