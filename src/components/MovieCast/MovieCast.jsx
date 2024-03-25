import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../components/API/apiTMDB";
import { getImg } from "../API/themovieDbImg";
import Loader from "../Loader/Loader";
import MessageError from "../MessageError/MessageError";
import css from "../MovieCast/MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <MessageError />}
      {!isLoading &&
        !isError &&
        (movieCast.length ? (
          <ul className={css.list}>
            {movieCast.map((actorData) => {
              return (
                <li key={actorData.id}>
                  <div>
                    <div className={css.castCard}>
                      <img
                        src={getImg(actorData.profile_path)}
                        width="200"
                        alt={actorData.name}
                      />
                    </div>
                    <div>
                      <p className={css.name}>{actorData.name}</p>
                      <p className={css.name}>
                        Character:{" "}
                        <span>
                          <i>
                            <b>{actorData.character || "Character"}</b>
                          </i>
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>There is no data</p>
        ))}
    </div>
  );
};

export default MovieCast;
