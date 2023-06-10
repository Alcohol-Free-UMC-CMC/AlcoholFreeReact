import { useQuery } from "react-query"
import { getCocktail } from "../../apis/cocktail/cocktail";

export const useCocktailQuery = (inputValue, tagValue, ingredients) => {
  return useQuery(["cocktail"], () => getCocktail(inputValue, tagValue, ingredients), {
    onSuccess: (res) => {
      console.log(res);
    }
  });
}