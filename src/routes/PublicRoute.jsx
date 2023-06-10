import { Navigate, Outlet } from "react-router-dom";
import { checkUserLoggedIn } from "../utils/checkUserLoggedIn";

export const PublicRoute = () => {
  return checkUserLoggedIn() ? <Navigate to="/" /> : <Outlet />;
};
