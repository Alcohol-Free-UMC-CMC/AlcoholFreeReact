import React, { useState } from 'react';
import { GptPageContainer, RecipeListContainer } from "./GptRecipePage.style";
import GptRecipeCard from "../../../components/gptrecipe/GptRecipeCard/GptRecipeCard"

const GptRecipePage = () => {
  const [gptRecipe, setGptRecipe] = useState([{
    id: "1765243hjsd",
    name: "헛개수 헛개수 짱"
  }, {
    id: "176524123213d",
    name: "헛개수 헛개수 짱짱"
  }]);
  return (
    <GptPageContainer>
      <RecipeListContainer>
        {
          gptRecipe.map((gptRecipeElement, index) => <GptRecipeCard gptRecipe={gptRecipeElement} key={index}/>)
        }
      </RecipeListContainer>
    </GptPageContainer>
  );
};

export default GptRecipePage;