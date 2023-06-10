import React from 'react';
import { InputContainer, SearchButton } from './SearchRecipeInput.style';

const SearchRecipeInput = ({ setIsFocus }) => {
  return (
    <>
      <div style={{position: "relative", marginTop: "20px"}}>
        <InputContainer type="text" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}/>
        <SearchButton>버튼</SearchButton>
      </div>
    </>
  );
};

export default SearchRecipeInput;