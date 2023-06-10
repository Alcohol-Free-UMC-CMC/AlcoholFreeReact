import { customAxios } from "../axios/customAxios";

const getRecommendList = (userLike) => {
  return customAxios.get("app/recommend/list", {
    userLike: userLike
  })
  .then(res => res)
  .then(res => res.data);
};

export { getRecommendList };
