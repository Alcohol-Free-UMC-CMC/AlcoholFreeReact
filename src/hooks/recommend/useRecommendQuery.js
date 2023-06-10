import { useQuery } from "react-query"
import { postRecommend } from "../../apis/recommend/recommend";
import { useLikeStore } from "../../store/userLike";

export const useCocktailQuery = () => {
  const { userLike } = useLikeStore();
  return useQuery(["recommend"], () => postRecommend(userLike));
}