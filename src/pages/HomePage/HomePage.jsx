import { useEffect, useState } from "react";
import { getMovie } from "../../components/API/apiTMDB";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [isLoadMore, setIsLoadMore] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [queryPage, setQueryPage] = useState(1);
  // const [isScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        // setIsError(false);
        // setIsLoading(true);
        // setIsLoadMore(false);

        const data = await getMovie();
        setMovies(data.results);
      } catch (err) {
        // setIsError(true);
        // setErrorMessage(err);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1>Trending today</h1>
      {/* {isLoading && <Loader />} */}
      {/* {isError && <ErrorMessage />} */}

      {/* {!isLoading &&
        !isError &&
        (movies.length ? ( */}
      <MovieList className={css.homeList} movies={movies} />
      {/* ) : ( */}
      {/* <p className={css.infoMessage}>No movies to display!</p>
        ))} */}
    </div>
  );
};

export default HomePage;
