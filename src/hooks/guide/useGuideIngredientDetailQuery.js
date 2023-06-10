import { useQuery } from "react-query";
import { getGuideIngredientDetail } from "../../apis/guide/keyword";

export const useGuideIngredientDetailQuery = (id) => {
  return useQuery(["guide-ingredients-detail"], () => getGuideIngredientDetail(id));
};
