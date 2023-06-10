import React from 'react';
import { GptRecipeCardContainer } from "./GptRecipeCard.style";

const GptRecipeCard = ({ gptRecipe }) => {
  return (
    <GptRecipeCardContainer>
      {
        gptRecipe.name
      }
    </GptRecipeCardContainer>
  );
};

export default GptRecipeCard;