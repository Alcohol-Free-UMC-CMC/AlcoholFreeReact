import { Navigate } from "react-router-dom";
import { checkUserLoggedIn } from "../utils/checkUserLoggedIn";

export const MainRoute = () => {
  return checkUserLoggedIn() ? (
    <Navigate to="/main" />
  ) : (
    <Navigate to="/auth/login" />
  );
};
