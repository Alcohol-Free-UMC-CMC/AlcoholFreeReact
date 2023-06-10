import React, { useState } from "react";
import RecipeListController from "../../../components/recipe/RecipeListController/RecipeListController";
import { RecipePageContainer, HomeBanner, RecipeListContainer } from "./RecipePage.style";
import RecipeList from "../../../components/recipe/RecipeList/RecipeList";
import { useCocktailQuery } from "../../../hooks/cocktail/useCocktailQuery";
import RecipeCard from "../../../components/recipe/RecipeCard/RecipeCard";

const RecipePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [tagValue, setTagValue] = useState("");
  const [ingredients, setIngredientsValue] = useState("");
  const { data, isSuccess, refetch } = useCocktailQuery(inputValue, tagValue, ingredients);
  return (
    <RecipePageContainer>
      <HomeBanner></HomeBanner>
      <RecipeListController
        inputValue={inputValue}
        setInputValue={setInputValue}
        tagValue={tagValue}
        setTagValue={setTagValue}
        ingredients={ingredients}
        setIngredientsValue={setIngredientsValue}
        refetch={refetch}
      />
      {
        isSuccess &&       
        
        <RecipeListContainer>
        {
          data && (
            data.result.map((recipe) => 
            <RecipeCard key={recipe.id} data={recipe}/>)
          )
        }
      </RecipeListContainer>
      }
    </RecipePageContainer>
  );
};

export default RecipePage;
