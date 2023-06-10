import React from 'react';
import SearchRecipeInput from "../SearchRecipeInput/SearchRecipeInput"
import RecipeSelectBox from '../RecipeSelectBox/RecipeSelectBox';
import { SelectContainer } from "./RecipeListController.style";

const RecipeListController = () => {
  return (
    <div>
      <SelectContainer>
        <RecipeSelectBox/>
        <RecipeSelectBox/>
      </SelectContainer>
      <SearchRecipeInput/>
    </div>
  );
};

export default RecipeListController;