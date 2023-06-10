import React, { useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { RecipeListContainer } from './RecipeList.style';

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([{
    id: 2321,
    name: "jjj"
  }, {
    id: 12374,
    name: "jjj"
  }, {
    id: 18764,
    name: "jjj"
  }, {
    id: 29803,
    name: "jjj"
  }]);
  return (
    <div>
      <RecipeListContainer>
        {
          recipeList.map((recipe) => 
            <RecipeCard key={recipe.id}/>)
        }
      </RecipeListContainer>
    </div>
  );
};

export default RecipeList;