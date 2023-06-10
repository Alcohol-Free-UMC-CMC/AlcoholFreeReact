<<<<<<< HEAD
import RecipePage from "../pages/recipe/RecipePage";
import GptRecommend from "../pages/gpt/GptRecommend/GptRecommend";
=======
import RecipePage from "../pages/recipe/RecipePage/RecipePage"
import GptRecipePage from "../pages/gptrecipe/GptRecipePage/GptRecipePage"

>>>>>>> 4d4c5963e1bd93da3f7d9f680b2b6a4b9d981d85

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
<<<<<<< HEAD
    name: "야메레시피",
    path: "/yame",
    components: <></>,
  },
=======
    name: "GPT레시피",
    path: "/gptrecipe",
    components: <GptRecipePage/>
  }
>>>>>>> 4d4c5963e1bd93da3f7d9f680b2b6a4b9d981d85
];

export { menuData };
