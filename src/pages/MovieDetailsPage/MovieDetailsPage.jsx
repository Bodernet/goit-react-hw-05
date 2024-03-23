import clsx from "clsx";
import css from "./MoviDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesById } from "../../components/API/apiTMDB";
import { getImg } from "../../components/API/themovieDbImg";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.addItems, {
    [css.active]: isActive,
  });
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMoviesById() {
      setMovieData({});
      try {
        // setIsError(false);
        // setIsLoading(true);

        const data = await getMoviesById(movieId);
        setMovieData(data);
      } catch (err) {
        // setIsError(true);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchMoviesById();
  }, [movieId]);

  const vote = Math.floor(movieData.vote_average * 10);
  const year = movieData.release_date
    ? new Date(movieData.release_date).getFullYear()
    : "?";

  return (
    <div>
      <NavLink to={backLinkRef.current}>Go back</NavLink>
      <div className={css.mainMovieInfo}>
        <img
          className={css.movieImg}
          src={getImg(movieData.poster_path)}
          width="500"
          alt={movieData.title}
        />
        <div className={css.movieInfo}>
          <h1>
            {movieData.title} ({year})
          </h1>
          <p>User Score: {vote}% </p>
          <span>
            <h2>Overview:</h2>
            <p>{movieData.overview}</p>
          </span>

          <span>
            <h2>Genres:</h2>

            {movieData.genres && (
              <p className={css.genres}>
                {movieData.genres.map((genre) => {
                  return <span key={genre.id}>{genre.name}</span>;
                })}
              </p>
            )}
          </span>
        </div>
      </div>
      <p>Aditional information</p>
      <ul>
        <li>
          <NavLink className={getNavLinkClassNames} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkClassNames} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
      {/* {isLoading && <Loader />}
    {isScrollToTop && <ScrollToTop scrollToTop={scrollToTop} />} */}
    </div>
  );
};

export default MovieDetailsPage;
