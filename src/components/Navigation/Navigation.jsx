import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLincClassNames = ({ isActive }) =>
  clsx(css.headerLinc, { [css.active]: isActive });

const Navigation = () => {
  return (
    <div>
      {" "}
      <header className={css.header}>
        <NavLink className={getNavLincClassNames} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLincClassNames} to="/movies">
          Movies
        </NavLink>
      </header>
    </div>
  );
};

export default Navigation;
