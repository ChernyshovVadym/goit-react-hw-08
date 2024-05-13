import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { BiLogOut } from "react-icons/bi";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.div}>
      <p>Wellcom{user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(BiLogOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
