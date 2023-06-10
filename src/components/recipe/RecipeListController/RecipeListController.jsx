import React, { useState } from 'react';
import SearchRecipeInput from "../SearchRecipeInput/SearchRecipeInput"
import IngredientSelectBox from '../IngredientSelectBox/IngredientSelectBox';
import { SelectContainer } from "./RecipeListController.style";
import { useKeywordIngredientsQuery } from "../../../hooks/keyword/useKeywordIngredientsQuery"

const RecipeListController = () => {
  const [isFocus, setIsFocus] = useState(false);
  const { data } = useKeywordIngredientsQuery();
  return (
    <div>
      <SearchRecipeInput setIsFocus={setIsFocus}/>
      {
        isFocus && (
          <SelectContainer>
            <IngredientSelectBox data={data}/>
            <IngredientSelectBox/>
          </SelectContainer>
        )
      }
    </div>
  );
};

export default RecipeListController;