import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { MainRoute } from "./routes/MainRoute";
import { PublicRoute } from "./routes/PublicRoute";
import JoinPage from "./pages/auth/JoinPage";
import LoginPage from "./pages/auth/LoginPage";
import MainPage from "./pages/alcohols/MainPage";


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route element={<PublicRoute />}>
        <Route path="/auth/join" element={<JoinPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
