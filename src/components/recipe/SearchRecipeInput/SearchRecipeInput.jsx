import React from 'react';
import { InputContainer, SearchButton } from './SearchRecipeInput.style';

const SearchRecipeInput = () => {
  return (
    <>
      <div style={{position: "relative"}}>
        <InputContainer type="text" />
        <SearchButton>버튼</SearchButton>
      </div>
    </>
  );
};

export default SearchRecipeInput;