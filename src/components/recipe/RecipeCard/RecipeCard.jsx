import React from 'react';
import { RecipeCardContainer } from "./RecipeCard.style";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({id}) => {
  const navigate = useNavigate();
  return (
    <RecipeCardContainer onClick={() => navigate(`/recipe/${id}`)}>
      
    </RecipeCardContainer>
  );
};

export default RecipeCard;