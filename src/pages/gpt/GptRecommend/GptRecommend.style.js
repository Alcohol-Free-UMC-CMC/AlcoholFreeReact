import styled from "styled-components";

const InputContainer = styled.div`
  background-color: #e7e7e7;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExplainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

const WordBlockStyle = styled.span`
  border-radius: 20px;
  background-color: #d0d0d0;
  padding: 0.3rem;
  font-size: 0.5rem;
  margin-right: 0.3rem;
  background-color: #ff4665;
`;

const Input = styled.input`
  border-radius: 20rem;
  padding: 1rem;
  border: none;
  background-color: #d0d0d0;
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 100%;
  margin-top: 0.4rem;
`;
const Form = styled.form`
  display: flex;
  position: relative;
`;
const Button = styled.button`
  position: absolute;
  left: 85%;
  top: 25%;
  background: transparent;
  border: none;
`;

const Text = styled.div`
  margin-bottom: 0.7rem;
`;

const WordBlockContainer = styled.div`
  margin-bottom: 0.35rem;
  padding-left: 7%;
`;

const Recipe = styled.div`
  width: 90%;
  background-color: #e7e7e7;
  margin: auto;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const ThisIsRecipe = styled.div`
  font-weight: bold;
  margin-bottom: 2rem;
`;
const H3 = styled.h3`
  font-weight: bold;
  font-size: large;
  margin-bottom: 0.4rem;
`;
const CocktailInfo = styled.div`
  margin-bottom: 2rem;
`;
const ShareRecipe = styled.div`
  background-color: #ff4665;
  padding: 1rem;
  text-align: center;
  border-radius: 0.45rem;
  color: white;
`;

export {
  Input,
  InputContainer,
  WordBlockStyle,
  ExplainText,
  Form,
  SearchContainer,
  Text,
  WordBlockContainer,
  Recipe,
  Button,
  ThisIsRecipe,
  H3,
  CocktailInfo,
  ShareRecipe,
};
