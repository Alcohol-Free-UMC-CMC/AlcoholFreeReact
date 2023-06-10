import { useQuery } from "react-query";
import { getGuideToolDetail } from "../../apis/guide/guide";

export const useGuideToolDetailQuery = (id) => {
  return useQuery(["guide-tool-detail"], () => getGuideToolDetail(id));
};
