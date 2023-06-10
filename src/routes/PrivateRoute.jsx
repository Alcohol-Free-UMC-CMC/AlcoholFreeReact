import { Navigate, Outlet } from "react-router-dom";
import { checkUserLoggedIn } from "../utils/checkUserLoggedIn";

export const PrivateRoute = () => {
  return checkUserLoggedIn() ? <Outlet /> : <Navigate to="/" />;
};
