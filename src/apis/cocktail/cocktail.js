import { customAxios } from "../axios/customAxios";

const getCocktail = (inputValue, tagValue, ingredients) => {
  return customAxios.get(`/app/cocktail/search?keyword=${inputValue}&tag=${tagValue}&ingredient=${ingredients}`)
    .then(res => res)
    .then(res => res.data);
};

const getCocktailDetail = (id) => {
  return customAxios.get(`app/cocktail/${id}`)
    .then(res => res)
    .then(res => res.data);
}

const postCocktailSearch = (tag, ingredient) => {
  return customAxios.post("app/cocktail/search")
}

export { getCocktail, getCocktailDetail, postCocktailSearch };
