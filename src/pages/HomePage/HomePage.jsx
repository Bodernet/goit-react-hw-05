import { useEffect, useState } from "react";
import { getMovie } from "../../components/API/apiTMDB";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import MessageError from "../../components/MessageError/MessageError";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getMovie();
        setMovies(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1 className={css.nameText}>Trending today</h1>
      {isLoading && <Loader />}
      {isError && <MessageError />}
      {!isLoading &&
        !isError &&
        (movies.length ? (
          <MovieList className={css.homeList} movies={movies} />
        ) : (
          <p>No movies ... </p>
        ))}
    </div>
  );
};

export default HomePage;
