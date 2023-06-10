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
      <p style={{ fontWeight: '600', position: 'relative', top: '10%'}}>어떤 칵테일을 찾으시나요?</p>
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