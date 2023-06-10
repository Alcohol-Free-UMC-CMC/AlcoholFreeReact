import React, { useState } from 'react';
import SearchRecipeInput from "../SearchRecipeInput/SearchRecipeInput"
import RecipeSelectBox from '../RecipeSelectBox/RecipeSelectBox';
import { SelectContainer } from "./RecipeListController.style";
import { useKeywordIngredientsQuery } from "../../../hooks/keyword/useKeywordIngredientsQuery"
import { useKeywordTagsQuery } from "../../../hooks/keyword/useKeywordTagsQuery"


const RecipeListController = ({ refetch, setInputValue, setTagValue, setIngredientsValue}) => {
  const [isFocus, setIsFocus] = useState(false);
  const { data: ingredients, isSuccess: isIngredientsSuccess } = useKeywordIngredientsQuery();
  const { data: tag, isSuccess: isTagSuccess } = useKeywordTagsQuery();
  return (
    <div>
      <p style={{ fontWeight: '600', position: 'relative', top: '10%'}}>어떤 칵테일을 찾으시나요?</p>
      <SearchRecipeInput setIsFocus={setIsFocus}/>
      {
        isFocus && (
          <SelectContainer>
            {
              isIngredientsSuccess && <RecipeSelectBox name={"재료"} data={ingredients.result} setValue={setTagValue}/>
            }
            {
              isTagSuccess &&  <RecipeSelectBox name={"태그"} data={tag.result} setValue={setIngredientsValue}/>
            }
          </SelectContainer>
        )
      }
    </div>
  );
};

export default RecipeListController;