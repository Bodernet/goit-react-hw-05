import clsx from "clsx";
import css from "./MoviDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesById } from "../../components/API/apiTMDB";

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

  return (
    <div>
      <NavLink to={backLinkRef.current}>Go back</NavLink>
      <div>
        <MovieDetailsPage movie={movieData} /> :{" "}
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
