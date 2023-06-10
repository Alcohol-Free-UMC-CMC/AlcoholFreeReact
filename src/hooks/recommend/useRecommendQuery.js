import { useQuery } from "react-query"
import { getRecommendList } from "../../apis/recommend/recommend";

export const useRecommendQuery = () => {
  return useQuery(["recommend"], () => getRecommendList());
}