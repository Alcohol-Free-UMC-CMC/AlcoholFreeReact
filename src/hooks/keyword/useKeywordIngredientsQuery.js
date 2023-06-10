import { useQuery } from "react-query"
import { getKeywordIngredients } from "../../apis/keyword/keyword";

export const useKeywordIngredientsQuery = () => {
  return useQuery(["keyword-ingredients"], () => getKeywordIngredients());
}