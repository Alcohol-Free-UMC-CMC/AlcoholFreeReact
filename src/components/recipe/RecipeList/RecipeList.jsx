import React, { useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { RecipeListContainer } from './RecipeList.style';
import { useCocktailQuery } from "../../../hooks/cocktail/useCocktailQuery"

const RecipeList = (data, isSuccess) => {
  return (
    <div>
      <RecipeListContainer>
        {
          data && (
            data.result.map((recipe) => 
            <RecipeCard key={recipe.id} data={recipe}/>)
          )
        }
      </RecipeListContainer>
    </div>
  );
};

export default RecipeList;