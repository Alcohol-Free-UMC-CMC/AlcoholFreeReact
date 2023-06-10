import RecipePage from "../pages/recipe/RecipePage"

const menuData = [
  {
    id: 1,
    name: "레시피",
    path: "/",
    components: <RecipePage/>
  }, {
    id: 2,
    name: "GPT추천",
    path: "/gptadvice",
    components: <></>
  }, {
    id: 3,
    name: "초보가이드",
    path: "/guide",
    components: <></>
  }, {
    id: 4,
    name: "야메레시피",
    path: "/yame",
    components: <></>
  }
];

export { menuData };