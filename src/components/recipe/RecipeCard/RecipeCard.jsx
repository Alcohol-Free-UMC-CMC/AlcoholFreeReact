import React from 'react';
import { RecipeCardContainer } from "./RecipeCard.style";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <RecipeCardContainer onClick={() => navigate(`/recipe/${data.id}`)}>
      <img src={data.imageUrl}/>
      <p>
        {
          data.name
        }
      </p>
    </RecipeCardContainer>
  );
};

export default RecipeCard;