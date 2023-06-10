import { useQuery } from "react-query"
import { getKeywordTags } from "../../apis/keyword/keyword";

export const useKeywordTagsQuery = () => {
  return useQuery(["keyword-tags"], () => getKeywordTags());
}