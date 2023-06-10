import RecipePage from "../pages/recipe/RecipePage/RecipePage";
import GptRecipePage from "../pages/gptrecipe/GptRecipePage/GptRecipePage";

const menuData = [
  {
    id: 1,
    name: "레시피",
    path: "/",
    components: <RecipePage />,
  },
  {
    id: 2,
    name: "GPT추천",
    path: "/gptadvice",
    components: <GptRecommend />,
  },
  {
    id: 3,
    name: "초보가이드",
    path: "/guide",
    components: <></>,
  },
  {
    id: 4,
    name: "GPT레시피",
    path: "/gptrecipe",
    components: <GptRecipePage />,
  },
];

export { menuData };
