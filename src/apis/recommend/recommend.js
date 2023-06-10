import { customAxios } from "../customAxios";

const postRecommend = (userLike) => {
  return customAxios.post("app/recommend", {
    userLike: userLike
  })
};

export { postRecommend };
