import React from 'react';
import RecipeListController from "../../../components/recipe/RecipeListController/RecipeListController"
import { RecipePageContainer, HomeBanner } from "./RecipePage.style";
import RecipeList from '../../../components/recipe/RecipeList/RecipeList';

const RecipePage = () => {
  return (
    <RecipePageContainer>
      <HomeBanner></HomeBanner>
      <RecipeListController/>
      <RecipeList/>
    </RecipePageContainer>
  );
};

export default RecipePage;