import { customAxios } from "../axios/customAxios";

const getKeywordTags = () => {
  return customAxios.get("app/keyword/tags")
    .then(res => res)
    .then(res => res.data);
};

const getKeywordIngredients = () => {
  return customAxios.get("app/keyword/ingredients")
    .then(res => res)
    .then(res => res.data);
};

export { getKeywordTags, getKeywordIngredients };
