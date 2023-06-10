import { useQuery } from "react-query"
import { getGuideTool } from "../../apis/guide/guide";

export const useGuideToolQuery = () => {
  return useQuery(["guide-tool"], () => getGuideTool());
}