import { format } from "date-fns";

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const MovieId = (movie) => {
  const formDate = (date) => {
    return format(new Date(date), "yyyy");
  };
  return (
    <div>
      <div>
        {movie.poster_path ? (
          <img
            src={`${BASE_URL}${movie.poster_path}`}
            alt={movie.title ? movie.title : "movie poster"}
          />
        ) : (
          "No data"
        )}
      </div>
      <div>
        <p>
          {movie.movie.title ? movie.movie.title : "No data"} (
          <span>
            {movie.movie.release_date
              ? formDate(movie.movie.release_date)
              : "No data"}
          </span>
          )
        </p>
        <p>
          vote average:{" "}
          <span>
            {movie.movie.vote_average ? movie.movie.vote_average : "No data"}
          </span>
        </p>

        <p>overview</p>
        <p>{movie.movie.overview ? movie.movie.overview : "No data"}</p>
        <p>genres</p>
        <ul>
          {movie.movie.genres &&
            Array.isArray(movie.movie.genres) &&
            movie.movie.genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <span>{genre.name}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MovieId;
