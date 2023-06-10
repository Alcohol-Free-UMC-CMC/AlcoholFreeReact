import React from "react";
import { InputContainer, SearchButton } from "./SearchRecipeInput.style";
import { AiOutlineSearch } from "react-icons/ai";

const SearchRecipeInput = ({ setIsFocus, refetch }) => {
  return (
    <>
      <div style={{ position: "relative", marginTop: "20px" }}>
        <InputContainer type="text" onFocus={() => setIsFocus(true)} />
        <SearchButton
          onClick={() => {
            refetch();
          }}
        >
          <AiOutlineSearch size={20} />
        </SearchButton>
      </div>
    </>
  );
};

export default SearchRecipeInput;
