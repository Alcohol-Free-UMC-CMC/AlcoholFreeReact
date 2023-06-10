import RecipePage from "../pages/recipe/RecipePage";
import GptRecommend from "../pages/gpt/GptRecommend/GptRecommend";

const BottomMenu = [
  {
    id: 1,
    name: "야메레시피",
    path: "/yame",
    components: <></>,
  },
  {
    id: 2,
    name: "홈",
    path: "/gptadvice",
    components: <GptRecommend />,
  },
  {
    id: 3,
    name: "마이페이지",
    path: "/guide",
    components: <></>,
  },
];

export { BottomMenu };
