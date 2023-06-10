import styled from "styled-components";


const InputContainer = styled.input`
  padding-left: 20px;
  width: 90vw;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #D9D9D9;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 10px;
  left: 85vw;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export { InputContainer, SearchButton };