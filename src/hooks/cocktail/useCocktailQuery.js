import { useQuery } from "react-query"
import { getCocktail } from "../../apis/cocktail/cocktail";

export const useCocktailQuery = () => {
  return useQuery(["cocktail"], () => getCocktail());
}