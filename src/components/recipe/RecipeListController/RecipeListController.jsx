import React, { useState } from 'react';
import SearchRecipeInput from "../SearchRecipeInput/SearchRecipeInput"
import RecipeSelectBox from '../RecipeSelectBox/RecipeSelectBox';
import { SelectContainer } from "./RecipeListController.style";

const RecipeListController = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div>
      <p style={{ fontWeight: '600', position: 'relative', top: '10%'}}>어떤 칵테일을 찾으시나요?</p>
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