import React, { useState } from 'react';
import SearchRecipeInput from "../SearchRecipeInput/SearchRecipeInput"
import RecipeSelectBox from '../RecipeSelectBox/RecipeSelectBox';
import { SelectContainer } from "./RecipeListController.style";

const RecipeListController = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div>
      <SearchRecipeInput setIsFocus={setIsFocus}/>
      {
        isFocus && (
          <SelectContainer>
            <RecipeSelectBox/>
            <RecipeSelectBox/>
          </SelectContainer>
        )
      }
    </div>
  );
};

export default RecipeListController;