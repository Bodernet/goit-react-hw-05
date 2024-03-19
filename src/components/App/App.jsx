import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import MovieCast from "../../pages/MovieCast";
import MovieReviews from "../../pages/MovieReviews";
import NotFoundPage from "../../pages/NotFoundPage";

const getNavLincClassNames = ({ isActive }) =>
  clsx(css.headerLinc, { [css.active]: isActive });

function App() {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={getNavLincClassNames} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLincClassNames} to="/movies">
          Movies
        </NavLink>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="/" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
