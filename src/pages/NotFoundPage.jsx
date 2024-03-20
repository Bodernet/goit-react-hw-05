import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Sorry, but the page is not available!</p>
      <p>
        Start with <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
