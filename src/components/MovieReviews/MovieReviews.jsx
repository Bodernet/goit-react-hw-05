import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { formatDate } from "../../services/getDate";
import { getImg } from "../../components/API/themovieDbImg";
import { getMovieReviews } from "../../components/API/apiTMDB";
import Loader from "../Loader/Loader";
import MessageError from "../MessageError/MessageError";
import css from "./MovieReviews.module.css";

const getFormDate = (date) => {
  const options = { month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setMovieReviews(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
      <div>
        {isLoading && <Loader />}
        {isError && <MessageError />}
        {!isLoading &&
          !isError &&
          (movieReviews.length ? (
            <ul className={css.list}>
              {movieReviews.map((reviewData) => (
                <li className={css.item} key={reviewData.id}>
                  <div className={css.itemInfo}>
                    <img
                      src={getImg(reviewData.author_details.avatar_path)}
                      width="100"
                      alt={reviewData.author}
                    />
                    <h3>{reviewData.author}</h3>
                    <p>{getFormDate(reviewData.created_at)}</p>
                  </div>
                  <p>{reviewData.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>There are no reviews for this movie.</p>
          ))}
      </div>
    </div>
  );
};

export default MovieReviews;
