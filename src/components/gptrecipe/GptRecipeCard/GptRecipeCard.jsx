import React from "react";
import { useNavigate } from "react-router-dom";
import { GptRecipeCardContainer, HeartContainer } from "./GptRecipeCard.style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLikeStore } from "../../../store/userLike";

const GptRecipeCard = ({ gptRecipe }) => {
  const navigate = useNavigate();
  const { userLike, cancelLike, addLike } = useLikeStore();
  return (
    <GptRecipeCardContainer>
      <p onClick={() => navigate(`/gptrecipe/${gptRecipe.id}`)} style={{width: "300px"}}>
        {
          gptRecipe.name
        }
      </p>
      <HeartContainer>
        {userLike.find((like) => like === gptRecipe.id) ? (
          <AiFillHeart fill="red" onClick={() => cancelLike(gptRecipe.id)} />
        ) : (
          <AiOutlineHeart onClick={() => addLike(gptRecipe.id)} />
        )}
      </HeartContainer>
    </GptRecipeCardContainer>
  );
};

export default GptRecipeCard;
