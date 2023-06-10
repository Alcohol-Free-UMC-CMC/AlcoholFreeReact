import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RecipeDetailContainer, AdditionalInfoContainer, RecipeDetailCard, HashTagContainer } from './RecipeDetailPage.style'
import HashTag from "../HashTag/HashTag"
import IngredientInfo from '../../../components/recipe/IngredientInfo/IngredientInfo';

const RecipeDetailPage = () => {
  const params = useParams();
  const [mockingData, setMockingData] = useState({
    title: "디테일",
    description: "설명입니다.",
    moodTag: [
      "달달한", "달콤한"
    ],
    ingredientTag: [
      "복분자", "사이다"
    ],
    ingredient: [
      {
        name: "복분자",
        value: "50ml"
      },
      {
        name: "사이다",
        value: "75ml"
      },
      {
        name: "얼음",
        value: "100g"
      }
    ]
  });
  useEffect(() => {
    console.log(params);
  })
  return (
    <div>
      <RecipeDetailContainer>
        <RecipeDetailCard>
          <h2>{mockingData.title}</h2>
          <img src="" alt="" />
          <div></div>
          <HashTagContainer>
            {
              mockingData.moodTag.map((mood, _id) => <HashTag key={_id} text={mood} bgColor={"#FF4665"}/>)
            }{
              mockingData.ingredientTag.map((ingredient, _id) => <HashTag key={_id} text={ingredient} bgColor={"#FFC7F4"}/>)
            }
          </HashTagContainer>
          <AdditionalInfoContainer>
            <h3>재료</h3>
            <p>
              {
                mockingData.ingredient.map((ingredientElement) => <IngredientInfo ingredient={ingredientElement}/>)
              }
            </p>
          </AdditionalInfoContainer>
          <AdditionalInfoContainer>
            <h3>레시피</h3>
            <p>
              2. 복분자와 사이다의 비율을 1 : 1.5의 비율로 넣어줍니다.
            </p>
          </AdditionalInfoContainer>
        </RecipeDetailCard>
      </RecipeDetailContainer>
    </div>
  );
};

export default RecipeDetailPage;