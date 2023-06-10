import React from 'react';
import RecipeListController from "../../../components/recipe/RecipeListController/RecipeListController"
import { RecipePageContainer, HomeBanner } from "./RecipePage.style";
import RecipeList from '../../../components/recipe/RecipeList/RecipeList';
import homeBanner from '../../../data/images/Banner.png'

const RecipePage = () => {
  return (
    <RecipePageContainer>
      <HomeBanner><img src={homeBanner} /></HomeBanner>
      
      <RecipeListController/>
      <RecipeList/>
    </RecipePageContainer>
  );
};

export default RecipePage;