import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { cast } = useParams();
  return (
    <div>
      MovieCast
      <p>Prod id: {cast}</p>;
    </div>
  );
};

export default MovieCast;
