import React from "react";
import { Select } from "./RecipeSelectBox.style";

const RecipeSelectBox = ({ data, name, setValue }) => {
  return (
    <>
      <Select name={name} id="" onChange={(e) => setValue(e.target.value)}>
        {data.map((dataElement) => (
          <option
            key={dataElement.name}
            value={dataElement.name}
          >{
            dataElement.name
          }</option>
        ))}
      </Select>
    </>
  );
};

export default RecipeSelectBox;
