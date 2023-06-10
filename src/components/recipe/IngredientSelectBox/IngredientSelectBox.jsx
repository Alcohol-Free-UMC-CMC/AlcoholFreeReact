import React from "react";
import { Select } from "./IngredientSelectBox.style";

const IngredientSelectBox = ({ data }) => {
  return (
    <>
      <Select name="" id="">
        {data.map((ingredient) => (
          <option
            key={ingredient.ingredient_id}
            value={ingredient.ingredientName}
          />
        ))}
      </Select>
    </>
  );
};

export default IngredientSelectBox;
