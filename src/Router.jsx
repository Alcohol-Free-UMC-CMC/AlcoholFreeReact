import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import JoinPage from "./pages/auth/JoinPage";
import LoginPage from "./pages/auth/LoginPage";
import { menuData } from "./data/menu";
import RecipeDetailPage from "./pages/recipe/RecipeDetailPage/RecipeDetailPage";
import GptRecipeDetailPage from "./pages/gptrecipe/GptRecipeDetailPage/GptRecipeDetailPage";


export const Router = () => {
  return (
    <Routes>
      {
        menuData.map((menu) => <Route id={menu.id} path={menu.path} element={menu.components} />)
      }
      <Route path="/recipe/:id" element={<RecipeDetailPage />}/>
      <Route path="/gptrecipe/:id" element={<GptRecipeDetailPage />}/>
      <Route element={<PublicRoute />}>
        <Route path="/auth/join" element={<JoinPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        {/* <Route path="/gptadvice" element={<GptRecommend />} /> */}
      </Route>
      <Route element={<PrivateRoute />}>
        {/* <Route path="/main" element={<MainPage />} /> */}
      </Route>
    </Routes>
  );
};
