import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import JoinPage from "./pages/auth/JoinPage";
import LoginPage from "./pages/auth/LoginPage";
import { menuData } from "./data/menu";
import GptRecommend from "./pages/gpt/GptRecommend/GptRecommend";


export const Router = () => {
  return (
    <Routes>
      {
        menuData.map((menu) => <Route path={menu.path} element={menu.components} />)
      }
      <Route element={<PublicRoute />}>
        <Route path="/auth/join" element={<JoinPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/gptadvice" element={<GptRecommend />} />
      </Route>
      <Route element={<PrivateRoute />}>
        {/* <Route path="/main" element={<MainPage />} /> */}
      </Route>
    </Routes>
  );
};
