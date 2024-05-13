import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/Contacts"> Contacts</NavLink>}{" "}
    </nav>
  );
};

export default Navigation;
