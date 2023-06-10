import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RecipeDetailContainer, AdditionalInfoContainer, RecipeDetailCard, HashTagContainer } from './RecipeDetailPage.style'
import HashTag from "../../../components/recipe/HashTag/HashTag"
import IngredientInfo from '../../../components/recipe/IngredientInfo/IngredientInfo';
import { useCocktailDetailQuery } from "../../../hooks/cocktail/useCocktailDetailQuery";

const RecipeDetailPage = () => {
  const params = useParams();
  const { data, isSuccess } = useCocktailDetailQuery(params.id)
  return (
    <div>
      {
        isSuccess && (
          <RecipeDetailContainer>
            <RecipeDetailCard>
              <h2>{data.result.name}</h2>
              <img src={data.result.imageUrl} alt="" style={{width: "300px"}}/>
              <div></div>
              <HashTagContainer>
                {
                  data.result.tags.map((mood, _id) => <HashTag key={_id} text={mood} bgColor={"#FF4665"}/>)
                }
                {
                  data.result.ingredients.map((ingredient, _id) => <HashTag key={_id} text={ingredient.name} bgColor={"#FFC7F4"}/>)
                }
              </HashTagContainer>
              <AdditionalInfoContainer>
                <h3>재료</h3>
                <p>
                  {
                    data.result.ingredients.map((ingredientElement) => <IngredientInfo ingredient={ingredientElement}/>)
                  }
                </p>
              </AdditionalInfoContainer>
              <AdditionalInfoContainer>
                <h3>레시피</h3>
                <p>
                  {
                    data.result.recipe
                  }
                </p>
              </AdditionalInfoContainer>
            </RecipeDetailCard>
          </RecipeDetailContainer>
        )
      }
    </div>
  );
};

export default RecipeDetailPage;