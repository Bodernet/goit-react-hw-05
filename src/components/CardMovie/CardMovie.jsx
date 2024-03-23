import css from "./CardMovie.module.css";
const BASE_URL = "https://image.tmdb.org/t/p/w500";

const CardMovie = ({ movie }) => {
  return (
    <>
      <div>
        {movie.poster_path ? (
          <img className={css.img}
            src={`${BASE_URL}${movie.poster_path}`}
            alt={movie.title ? movie.title : "movie poster"}
          
          />
        ) : (
          "No data"
        )}
      </div>
      <p className={css.title}>{movie.title ? movie.title : "Not found"}</p>
    </>
  );
};

export default CardMovie;
