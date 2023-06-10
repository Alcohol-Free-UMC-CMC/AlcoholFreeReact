import { customAxios } from "../customAxios";

const getKeywordTags = () => {
  return customAxios.get("app/keyword/tags")
};

const getKeywordIngredients = () => {
  return customAxios.get("app/keyword/ingredients")
};

export { getKeywordTags, getKeywordIngredients };
