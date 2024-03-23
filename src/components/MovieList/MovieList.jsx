import { Link } from "react-router-dom";
import CardMovie from "../CardMovie/CardMovie";
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies &&
        Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li className={css.movieItem} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <CardMovie movie={movie} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
export default MovieList;
