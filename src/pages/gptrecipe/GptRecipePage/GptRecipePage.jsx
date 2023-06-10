import React, { useState } from 'react';
import { GptPageContainer, RecipeListContainer } from "./GptRecipePage.style";
import GptRecipeCard from "../../../components/gptrecipe/GptRecipeCard/GptRecipeCard"
import { useRecommendQuery } from "../../../hooks/recommend/useRecommendQuery";

const GptRecipePage = () => {
  const { data, isSuccess } = useRecommendQuery();
  return (
    <GptPageContainer>
      {
        isSuccess && (
          <RecipeListContainer>
            {
              data.result.map((gptRecipeElement, index) => <GptRecipeCard gptRecipe={gptRecipeElement} key={index}/>)
            }
          </RecipeListContainer>
        )
      }
    </GptPageContainer>
  );
};

export default GptRecipePage;