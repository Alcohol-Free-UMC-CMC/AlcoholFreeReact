import { customAxios } from "../axios/customAxios"

const getGuideIngredient = () => {
  return customAxios.get('app/guide/ingredient')
    .then(res => res)
    .then(res => res.data);
};

const getGuideTool = () => {
  return customAxios.get('app/guide/tool')
    .then(res => res)
    .then(res => res.data);
};

const getGuideIngredientDetail = (ingredient_id) => {
  return customAxios.get(`app/guide/ingredient/${ingredient_id}`)
    .then(res => res)
    .then(res => res.data);
};

const getGuideToolDetail = (tool_id) => {
  return customAxios.get(`app/guide/tool/${tool_id}`)
    .then(res => res)
    .then(res => res.data);
}

export { getGuideIngredient, getGuideTool, getGuideIngredientDetail, getGuideToolDetail }