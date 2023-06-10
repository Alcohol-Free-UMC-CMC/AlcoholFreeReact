import { useQuery } from "react-query"
import { getGuideIngredient } from "../../apis/guide/guide";

export const useGuideIngredientQuery = () => {
  return useQuery(["guide-ingredients"], () => getGuideIngredient());
}