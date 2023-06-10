import React from 'react';
import { IngredientContainer } from "./IngredientInfo.style";

const IngredientInfo = ({ingredient}) => {
  return (
    <IngredientContainer>
      <p>{ingredient.name}</p>
      <p>{ingredient.amount}</p>
    </IngredientContainer>
  );
};

export default IngredientInfo;