import { Link, useLocation } from "react-router-dom";
import CardMovie from "../CardMovie/CardMovie";
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies &&
        Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li className={css.movieItem} key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <CardMovie movie={movie} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
export default MovieList;
