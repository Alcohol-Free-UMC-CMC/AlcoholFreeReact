import { useQuery } from "react-query"
import { getCocktailDetail } from "../../apis/cocktail/cocktail";

export const useCocktailDetailQuery = (id) => {
  return useQuery([`cocktail-${id}`], () => getCocktailDetail(id));
}