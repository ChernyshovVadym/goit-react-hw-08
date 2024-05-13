import css from "./AuthNav.module.css";

import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.navLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.navLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
