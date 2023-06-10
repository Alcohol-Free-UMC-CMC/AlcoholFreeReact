import React, { useState } from "react";
import { useParams } from "react-router";
import {
  RecipeDetailContainer,
  RecipeDetailCard,
  RecipeInfoContainer,
  HeartContainer,
} from "./GptRecipeDetailPage.style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLikeStore } from "../../../store/userLike";

const GptRecipeDetailPage = () => {
  const { userLike } = useLikeStore();
  const params = useParams();
  const [recipeData, setRecipeData] = useState({
    id: "werwerewr",
    title: "헛개수 뭐시기 저시기..",
    describe: "설명 뭐시기 저시기...",
  });
  return (
    <RecipeDetailContainer>
      <HeartContainer>
        {userLike.find((like) => like === params.id) ? (
          <AiFillHeart fill="red" color="red" />
        ) : (
          <AiOutlineHeart />
        )}
      </HeartContainer>
      <RecipeDetailCard>
        <h2>{recipeData.title}</h2>
        <RecipeInfoContainer>
          <h2>설명</h2>
          <p>{recipeData.describe}</p>
        </RecipeInfoContainer>
      </RecipeDetailCard>
    </RecipeDetailContainer>
  );
};

export default GptRecipeDetailPage;
