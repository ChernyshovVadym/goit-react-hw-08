import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefreshing);
  const redirect = !isLoggedIn && !isRefresh;
  return redirect ? <Navigate to={redirectTo} /> : Component;
};
