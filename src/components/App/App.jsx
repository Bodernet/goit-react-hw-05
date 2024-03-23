import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
// import css from "../App/App.module.css";
// import Loader from "../components/Loader/Loader";

function App() {
  return (
    <Suspense>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
