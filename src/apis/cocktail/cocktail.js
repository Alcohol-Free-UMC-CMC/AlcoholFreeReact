import { customAxios } from "../axios/customAxios";

const getCocktail = () => {
  return customAxios.get("app/cocktail")
    .then(res => res)
    .then(res => res.data);
};

const getCocktailDetail = (id) => {
  return customAxios.get(`app/cocktail/${id}`)
}

const postCocktailSearch = (tag, ingredient) => {
  return customAxios.post("app/cocktail/search")
}

export { getCocktail, getCocktailDetail, postCocktailSearch };
