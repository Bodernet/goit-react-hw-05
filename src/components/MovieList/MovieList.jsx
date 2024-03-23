import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul>
      {movieList &&
        Array.isArray(movieList) &&
        movieList.map((movie) => {
          return (
            <li key={movie.id}>
              <Link state={location} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
export default MovieList;
